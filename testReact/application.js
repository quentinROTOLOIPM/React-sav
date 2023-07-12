
  function createXml() { 
     return `
  <application name="testReact">
  <property name="param">http://localhost:5000/testReact/application/index.html</property>
  <property name="screenSaverUrl">http://localhost:5000/testReact/screensaver/screensaverMoovHop.png</property>
  <property name="splashUrl">http://localhost:5000/softkiosk/splash.html</property>
  <property name="errorUrl">http://localhost:9222</property>
  <property name="startDelay">10</property>
  <property name="TabRule">NO_SCR_SAVER</property>
  <phase name="EXPL" subPhase="" code="8fb9507c8505cdfd59d0a5218277a725" autologon="false" admin="true" >
  <flags>
  <flag name="AppManual">true</flag>
  </flags>
  <services>
  <service name="OnscreenKbd"></service>
  <service name="Session">
    <property name="Marker">100,10</property>
  </service>
  <service name="BarcodeReading"></service>
  <service name="CardPayment"></service>
  <service name="CardDispensing"></service> 
  <service name="CashPayment"></service> 
  <service name="ContactlessReading"></service>
  <service name="DocumentScanning"></service>
  <service name="CameraShooting"></service>
  <service name="ReceiptPrinting"></service>
  <service name="Signaling"></service>
  <service name="TicketPrinting"></service>
  <service name="VitaleCardReading"></service>
  <!-- Session, inactivité à configurer 
   -->
  </services>
  </phase>
  </application>
  `; 
  }