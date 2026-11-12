import http.server
import socketserver
import webbrowser
import os
import sys
import json
import cgi

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class DelegadoAAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == '/upload':
            try:
                content_type = self.headers.get('Content-Type', '')
                if 'multipart/form-data' in content_type:
                    form = cgi.FieldStorage(
                        fp=self.rfile,
                        headers=self.headers,
                        environ={'REQUEST_METHOD': 'POST', 'CONTENT_TYPE': content_type}
                    )
                    file_item = form['file']
                    folder_path = form.getvalue('folder', '01 - FINANCEIRO')
                    filename = file_item.filename
                    
                    target_dir = os.path.join(DIRECTORY, folder_path)
                    os.makedirs(target_dir, exist_ok=True)
                    target_file = os.path.join(target_dir, filename)
                    
                    with open(target_file, 'wb') as f:
                        f.write(file_item.file.read())
                    
                    rel_path = os.path.relpath(target_file, DIRECTORY).replace('\\', '/')
                    resp_data = {
                        'success': True,
                        'filename': filename,
                        'relativePath': rel_path,
                        'sizeBytes': os.path.getsize(target_file)
                    }
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps(resp_data).encode('utf-8'))
                    return
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
                return

        super().do_POST()

def main():
    os.chdir(DIRECTORY)
    handler = DelegadoAAHandler
    
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        url = f"http://localhost:{PORT}/PLATAFORMA_GESTAO_DELEGADO_AA.html"
        print("=" * 60)
        print(f" Servidor Local - Delegado AA com Endpoint de Upload ativo!")
        print(f" URL da Plataforma: {url}")
        print(" Pressione Ctrl+C para encerrar o servidor a qualquer momento.")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor encerrado pelo usuario.")
            sys.exit(0)

if __name__ == "__main__":
    main()
