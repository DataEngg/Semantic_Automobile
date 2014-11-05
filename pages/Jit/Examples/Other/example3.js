var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init() {
    //init data
    var json = {
      'id': 'AUTOMOB',
      'name': 'AUTOMOB',
      'data': {
          //'$type': 'none'
      },
      'children':[
        {
            'id':'Attribute',
            'name': 'Attribute',
            'data': {
                '$angularWidth': 20,
                '$color': '#f55'
				
            },
            'children': [
                {
                    'id':'Engine',
                    'name': 'Engine',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': []
                    
                },
                {
                    'id':'Fuel_Type',
                    'name': 'Fuel_Type',
                    'data': {
                        '$angularWidth': 70,
                        '$color': '#66f'
                    },
                    'children': []
                    
                },
                {
                    'id':'Manufacturers',
                    'name': 'Manufacturers',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': []
                    
                }
            ]
        },
        {
            'id':'Automobile',
            'name': 'Automobile',
            'data': {
                '$angularWidth': 40,
                '$color': '#f77'
            },
            'children': 
			[
                {
                    'id':'Aerial_Vehicle',
                    'name': 'Aerial_Vehicle',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },
                     'children': 
			[
                {
                    'id':'Plane',
                    'name': 'Plane',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },
                    'children': [
					{
                    'id':'Fighter_Plane',
                    'name': 'Fighter_Plane',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },
				},
					{
                    'id':'Passenger_Plane',
                    'name': 'Passenger_Plane',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },
				}
					]
                    
                },
                {
                    'id':'Space_Shuttle',
                    'name': 'Space_Shuttle',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },
                    'children': []
                    
                }
				
            ]
                    
                },
                {
                    'id':'Ground_Vehicle',
                    'name': 'Ground_Vehicle',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },
                    'children': [{
                    'id':'Bike',
                    'name': 'Bike',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    }, 'children': [
					{
                    'id':'Pulsar_220',
                    'name': 'Pulsar_220',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    }, 'children': []
					},{
                    'id':'Apache_Rtr_180',
                    'name': 'Apache_Rtr_180',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    }, 'children': []
					}
					
					]
					},
					{
                    'id':'Car_Taxi',
                    'name': 'Car_Taxi',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': [
					{
                    'id':'Desert_Car',
                    'name': 'Desert_Car',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					},
					{
                    'id':'Electric_Car',
                    'name': 'Electric_Car',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					},
					{
                    'id':'Personal_Car',
                    'name': 'Personal_Car',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					},
					{
                    'id':'Sports_Car',
                    'name': 'Sports_Car',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					},
					{
                    'id':'Taxi',
                    'name': 'Taxi',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					}
					]
					},
					{
                    'id':'Bus',
                    'name': 'Bus',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': [{
                    'id':'Goverment_Bus',
                    'name': 'Goverment_Bus',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					},{
                    'id':'Private_Bus',
                    'name': 'Private_Bus',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					}]
					},
					{
                    'id':'Train',
                    'name': 'Train',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': [{
                    'id':'Railways',
                    'name': 'Railways',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					},{
                    'id':'Mono_Rail',
                    'name': 'Mono_Rail',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					},{
                    'id':'Metro',
                    'name': 'Metro',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					}]
					},
					{
                    'id':'Truck_Transportation',
                    'name': 'Truck_Transportation',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },
					}
					]
                    
                },
				{
                    'id':'Water_Vehicle',
                    'name': 'Water_Vehicle',
                    'data': {
                        '$angularWidth': 60,
                        '$color': '#99f'
                    },
                    'children': [{
                    'id':'Civilian_Ship',
                    'name': 'Civilian_Ship',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					},
					{
                    'id':'Military_Ship',
                    'name': 'Military_Ship',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': []
					}]
                    
                }
            ]
        },
        /*{
            'id':'pie30',
            'name': 'pie3',
            'data': {
                '$angularWidth': 10,
                '$color': '#f99'
            },
            'children': [
                {
                    'id':'pie300',
                    'name': 'pc1',
                    'data': {
                        '$angularWidth': 100,
                        '$color': '#aaf'
                    },
                    'children': []
                    
                }
            ]
        }*/
      ]
    };
    var jsonpie = {
      'id': 'root',
      'name': 'RGraph based Pie Chart',
      'data': {
          '$type': 'none'
      },
      'children':[
        {
            'id':'pie1',
            'name': 'pie1',
            'data': {
                '$angularWidth': 20,
                '$color': '#55f'
            },
            'children': []
        },
        {
            'id':'pie2',
            'name': 'pie2',
            'data': {
                '$angularWidth': 40,
                '$color': '#77f'
            },
            'children': []
        },
        {
            'id':'pie3',
            'name': 'pie3',
            'data': {
                '$angularWidth': 10,
                '$color': '#99f'
            },
            'children': []
        },
        {
            'id':'pie4',
            'name': 'pie4',
            'data': {
                '$angularWidth': 30,
                '$color': '#bbf'
            },
            'children': []
        }
      ]
    };
    //end
    
    //init nodetypes
    //Here we implement custom node rendering types for the RGraph
    //Using this feature requires some javascript and canvas experience.
    $jit.RGraph.Plot.NodeTypes.implement({
        //This node type is used for plotting pie-chart slices as nodes
        'shortnodepie': {
          'render': function(node, canvas) {
            var ldist = this.config.levelDistance;
            var span = node.angleSpan, begin = span.begin, end = span.end;
            var polarNode = node.pos.getp(true);
            
            var polar = new $jit.Polar(polarNode.rho, begin);
            var p1coord = polar.getc(true);
            
            polar.theta = end;
            var p2coord = polar.getc(true);
            
            polar.rho += ldist;
            var p3coord = polar.getc(true);
            
            polar.theta = begin;
            var p4coord = polar.getc(true);
            
            
            var ctx = canvas.getCtx();
            ctx.beginPath();
            ctx.moveTo(p1coord.x, p1coord.y);
            ctx.lineTo(p4coord.x, p4coord.y);
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, polarNode.rho, begin, end, false);

            ctx.moveTo(p2coord.x, p2coord.y);
            ctx.lineTo(p3coord.x, p3coord.y);
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, polarNode.rho + ldist, end, begin, true);
            
            ctx.fill();
          }
        }
    });
    
    $jit.ST.Plot.NodeTypes.implement({
        //Create a new node type that renders an entire RGraph visualization
        'piechart': {
          'render': function(node, canvas, animating) {
            var ctx = canvas.getCtx(), pos = node.pos.getc(true);
            ctx.save();
            ctx.translate(pos.x, pos.y);
            pie.plot();
            ctx.restore();
          }
        }
    });
    //end
    
    //init pie
    var pie = new $jit.RGraph({
        'injectInto': 'infovis',
        //Add node/edge styles and set
        //overridable=true if you want your
        //styles to be individually overriden
        Node: {
            'overridable': true,
             'type':'shortnodepie'
        },
        Edge: {
            'type':'none'
        },
        //Parent-children distance
        levelDistance: 15,
        //Don't create labels for this visualization
        withLabels: false,
        //Don't clear the canvas when plotting
        clearCanvas: false
    });
    //load graph.
    pie.loadJSON(jsonpie);
    pie.compute();
    //end

    //init st
    var st = new $jit.ST({
        useCanvas: pie.canvas,
        orientation: 'bottom',
        //Add node/edge styles
        Node: {
           type: 'piechart',
           width: 80,
           height: 60
        },
        Edge: {
            color: '#999',
            type: 'quadratic:begin'
        },
        //Parent-children distance
        levelDistance: 60,

        //Add styles to node labels on label creation
        onCreateLabel: function(domElement, node){
            //add some styles to the node label
            var style = domElement.style;
            domElement.id = node.id;
            style.color = '#fff';
            style.fontSize = '0.8em';
            style.textAlign = 'center';
            style.width = "60px";
            style.height = "24px";
            style.paddingTop = "22px";
            style.cursor = 'pointer';
            domElement.innerHTML = node.name;
            domElement.onclick = function() {
              st.onClick(node.id, {
                    Move: {
                        offsetY: -90
                    }
                });  
            };
        }
    });
    //load json data
    st.loadJSON(json);
    //compute node positions and layout
    st.compute();
    //optional: make a translation of the tree
    st.geom.translate(new $jit.Complex(0, 200), "start");
    //Emulate a click on the root node.
    st.onClick(st.root, {
        Move: {
            offsetY: -90
        }
    });
    //end
}
