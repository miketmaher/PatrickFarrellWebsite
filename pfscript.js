//Contact Page, Confirm form has been submitted
function PopUp()
{
	var popup = window.open("", "", "width=100, height=103");
	popup.document.open();
	popup.document.write("<title>Confirmed</title>");	
	popup.document.write("Your Query has been sent, we will be in touch shortly.");
	popup.document.close();
}

//Contact Page, click the map to display a larger version
function DisplayMap()
{
	var popup = window.open("", "", "width = 610, height = 473");
	popup.document.open();
	popup.document.write("<title>Location</title>");	
	popup.document.write("<img src='graphics/location_large.png' alt='Location of PfP' />");
	popup.document.close();
}

