
function init() {
  Jel.fn.init = function(){

      //Setting the xsd file in order to do validation
      try{
        Jel.attachXSD('schema/camel.xsd');
        Jel.setBaseFile('xml/camelRoute.xml');
        Jel.setNamespace('http://camel.apache.org/schema/spring');
        Jel.setBaseElement('routes');
        Jel.setXMLWrapper('route');
      }
      catch(err){
        console.log("Problems with http xml request");
      }

      //Adding shapes to palette
      var shape1 = new Jel.Shape();
      shape1.setImage("img/me.gif");
      shape1.setName("From");
      shape1.setMetaelement("from");
      shape1.setPosition(70,70);		
      Jel.paletteShapes.addShape(shape1);		

      
      var shape2 = new Jel.Shape();
      shape2.setImage("img/mt.gif");
      shape2.setName("Translator");
      shape2.setPosition(240,140);
      shape2.setMetaelement('transform');	
      shape2.setAsComposed();
      
      Jel.paletteShapes.addShape(shape2);

      var shape3 = new Jel.Shape();
      shape3.setImage("img/me.gif");
      shape3.setName("To");
      shape3.setPosition(400,220);
      shape3.setMetaelement('to');
      
      Jel.paletteShapes.addShape(shape3);
      
      var shape4 = new Jel.Shape();
      shape4.setImage("img/cbr.gif");
      shape4.setName("Router");
      shape4.setMetaelement('choice');
      Jel.paletteShapes.addShape(shape4);
      //this element is a composition of different shape
      shape4.setAsComposed();

      //Processor
      var shape5 = new Jel.Shape();
      shape5.setImage("img/mt.gif");
      shape5.setName("Processor");
      shape5.setMetaelement('process');
      Jel.paletteShapes.addShape(shape5);

      var shape6 = new Jel.Shape();
      shape6.setImage("img/mt.gif");
      shape6.setName("Method");
      shape6.setMetaelement('method');
      Jel.paletteShapes.addShape(shape6);

      var filter = new Jel.Shape();
      filter.setImage("img/mf.gif");
      filter.setName("Filter");
      filter.setMetaelement('filter');
      Jel.paletteShapes.addShape(filter);
      //this element is a composition of different shape
      filter.setAsComposed();

      //Adding shapes to canvas (instead dropping it graphically)
      instance1 = Jel.Canvas.addShape(shape1);	
      instance2 = Jel.Canvas.addShape(shape2);
      instance3 = Jel.Canvas.addShape(shape3);
      //Adding connections between shapes (position matters)
      Jel.Canvas.connect(instance1, instance2);
      
  }
}