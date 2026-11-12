//=====================================================================
// Main functions
//=====================================================================
function jsEmail_SendFeedback_Model(pModName, pModType, pModGroup, pModLevel_1, pModLevel_2, pModLevel_3, pModLevel_4, pModLevel_5, pModLevel_6, pModLevel_7, pModLevel_8, pModLevel_9)
{
  //Prepare parameters for jsEmail_Send
  var pMailTo      = jsEmail_GetMailTo ();
  var pMailCc      = jsEmail_GetMailCc ();
  var pMailSubject = jsEmail_GetSubject();
  var pMailBody    = jsEmail_GetBody   (pModName, pModType, pModGroup, pModLevel_1, pModLevel_2, pModLevel_3, pModLevel_4, pModLevel_5, pModLevel_6, pModLevel_7, pModLevel_8, pModLevel_9);

  //Send email using default email system
  jsEmail_Send(pMailTo, pMailCc, pMailSubject, pMailBody);
}
//=====================================================================
function jsEmail_Send(pMailTo, pMailCc, pSubject, pBody)
{
  var strEmail;

  //Build strEmail with MailTo Syntax
  if (pMailTo.length<3)
  {
     return;
  }
  else
  {
    strEmail="mailto:" + pMailTo;
  }

  if (pSubject.length>0)
  {
    strEmail += "?subject=" + encodeURI(pSubject);
  }

  if (pMailCc.length>3)
  {
    strEmail += "&cc=" + pMailCc;
  }

  if (pBody.length>0)
  {
    strEmail += "&body=" + encodeURI(pBody);
  }

  // Open the default email client with the mailto link
  window.location.href = strEmail;
}
//---------------------------------------------------------------------
function jsEmail_GetMailTo()
{
  return "klug@klugsolutions.com;wagner@klugsolutions.com";
}
//---------------------------------------------------------------------
function jsEmail_GetMailCc()
{
  return "financeiro@klugsolutions.com;suporte@klugsolutions.com";
}
//---------------------------------------------------------------------
function jsEmail_GetSubject()
{
  return "Observações sobre website de processos";
}
//---------------------------------------------------------------------
function jsEmail_GetBody(pModName, pModType, pModGroup, pModLevel_1, pModLevel_2, pModLevel_3, pModLevel_4, pModLevel_5, pModLevel_6, pModLevel_7, pModLevel_8, pModLevel_9)
{
  var strBody;

  strBody  = FGetBodyGreetings();
  strBody += FGetBodyModel    (pModName , pModType);
  strBody += FGetBodyTree     (pModGroup, pModLevel_1, pModLevel_2, pModLevel_3, pModLevel_4, pModLevel_5, pModLevel_6, pModLevel_7, pModLevel_8, pModLevel_9);
  strBody += FGetBodyRemarks  ();
  strBody += FGetBodyClosing  ();
  return strBody;
}
//=====================================================================
// Auxiliary functions
//=====================================================================
function FGetBodyGreetings()
{
  return "Prezada Equipe de Processos:\n\n";
}
//---------------------------------------------------------------------
function  FGetBodyModel(pModName, pModType)
{
  var strResult;

  strResult  = "Gostaria de comunicar minhas observações sobre o seguinte modelo:\n";
  strResult += "  # Nome do modelo: " + pModName + ".\n";
  strResult += "  # Tipo de modelo   : " + pModType + ".\n";
  strResult += "\n";

  return strResult;
}
//---------------------------------------------------------------------
function  FGetBodyTree(pModGroup, pModLevel_1, pModLevel_2, pModLevel_3, pModLevel_4, pModLevel_5, pModLevel_6, pModLevel_7, pModLevel_8, pModLevel_9)
{
  var strResult;

  strResult  = "Para acessar o modelo utilizei o seguinte caminho no Process Explorer:\n";
  strResult += FGetTextGroup (pModGroup     );
  strResult += FGetTextModel (pModLevel_1, 1);
  strResult += FGetTextModel (pModLevel_2, 2);
  strResult += FGetTextModel (pModLevel_3, 3);
  strResult += FGetTextModel (pModLevel_4, 4);
  strResult += FGetTextModel (pModLevel_5, 5);
  strResult += FGetTextModel (pModLevel_6, 6);
  strResult += FGetTextModel (pModLevel_7, 7);
  strResult += FGetTextModel (pModLevel_8, 8);
  strResult += FGetTextModel (pModLevel_9, 9);
  strResult += "\n";

  return strResult;
}
//---------------------------------------------------------------------
function FGetBodyRemarks()
{
  var strResult;

  strResult  = "Minhas observações sobre o modelo são as seguintes:\n";
  strResult += "  1. [Observação do usuário].\n";
  strResult += "  2. [Observação do usuário].\n";
  strResult += "  3. [Observação do usuário].\n";
  strResult += "  4. [Observação do usuário].\n";
  strResult += "  5. [Observação do usuário].\n";
  strResult += "\n";

  return strResult;
}
//---------------------------------------------------------------------
function FGetBodyClosing()
{
  var strResult;

  strResult  = "Agradeço antecipadamente a atenção dispensada a esta comunicação\n";
  strResult += "e aguardo comentários e feedback referentes às minhas observações.\n\n";
  strResult += "Atenciosamente,\n\n";
  strResult += "[Nome do usuário]";

  return strResult;
}
//---------------------------------------------------------------------
function FGetTextGroup(pModGroup)
{
  if (pModGroup.length==0)
  {
    return "";
  }
  else
  {
    return "  + Nível 1: " + pModGroup + ".\n";
  }
}
//---------------------------------------------------------------------
function FGetTextModel(pModName, pModLevel)
{
  if (pModName.length==0)
  {
    return "";
  }
  else
  {
    return "  + Nível " + parseInt(pModLevel+1) + ": " + pModName + ".\n";
  }
}
//=====================================================================

