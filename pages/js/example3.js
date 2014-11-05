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
                    'children': [ {
                    'id':'6',
                    'name': 'BMW_Stroke',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                }, {
                    'id':'5',
                    'name': 'Cizeta_moroder',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'5',
                    'name': 'Cizeta_moroder',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'7',
                    'name': 'Commer_Knocker',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'8',
                    'name': 'CR4',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'9',
                    'name': 'Cummins_ISB',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'10',
                    'name': 'DTSi_150',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'11',
                    'name': 'DTSi_180',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'12',
                    'name': 'DTSi_220',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'13',
                    'name': 'Mazada',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },
				
				
                    
					]
                    
                },
                {
                    'id':'Fuel_Type',
                    'name': 'Fuel_Type',
                    'data': {
                        '$angularWidth': 70,
                        '$color': '#66f'
                    },
                    'children': [
					{
                    'id':'1',
                    'name': 'CNG',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },
				{
                    'id':'2',
                    'name': 'COAL',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },
				{
                    'id':'3',
                    'name': 'Diesl',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },
				{
                    'id':'4',
                    'name': 'Petrol',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'15',
                    'name': 'Jet_Fuel',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'16',
                    'name': 'Gasoline',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'17',
                    'name': 'Electricity',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'18',
                    'name': 'Fuel_oil',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                },{
                    'id':'19',
                    'name': 'Fuel_Coal',
                    'data': {
                        '$angularWidth': 20,
                        '$color': '#55f'
                    },
                    'children': [
                    
					]
                    
                }]
                    
                },
                {
                    'id':'Manufacturers',
                    'name': 'Manufacturers',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': [
					 {
                    'id':'20',
                    'name': 'Audi',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': []
                    
                }, {
                    'id':'21',
                    'name': 'Pulsar',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': []
                    
                }, {
                    'id':'22',
                    'name': 'Apache',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': []
                    
                }, {
                    'id':'23',
                    'name': 'Ashok_Leyland',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': []
                    
                }, {
                    'id':'24',
                    'name': 'Bombardier',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': []
                    
                }, {
                    'id':'25',
                    'name': 'HAL',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': []
                    
                }, {
                    'id':'26',
                    'name': 'Mitsubishi',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': []
                    
                }, {
                    'id':'27',
                    'name': 'ISRO',
                    'data': {
                        '$angularWidth': 10,
                        '$color': '#77f'
                    },
                    'children': []
                    
                }, ]
                    
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
                    },'children':[{
                    'id':'30',
                    'name': 'airways',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'31',
                    'name': 'Cessna_Citation_CJ4',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}]
				},
					{
                    'id':'Passenger_Plane',
                    'name': 'Passenger_Plane',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[{
                    'id':'32',
                    'name': 'AirIndia',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},]
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
                    'children': [{
                    'id':'33',
                    'name': 'Apollo',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'34',
                    'name': 'Discovery',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},]
                    
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
                    },'children': [
					{
                    'id':'40',
                    'name': 'Lancer_Evolution',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'41',
                    'name': 'Subaru_Forester',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},]
					},
					{
                    'id':'Electric_Car',
                    'name': 'Electric_Car',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': [{
                    'id':'35',
                    'name': 'Nissan_leaf',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},]
					},
					{
                    'id':'Personal_Car',
                    'name': 'Personal_Car',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': [{
                    'id':'36',
                    'name': 'BMW_M3',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'37',
                    'name': 'Accent',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'38',
                    'name': 'Alto_800',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'39',
                    'name': 'Swift',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'50',
                    'name': 'Civic',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}]
					},
					{
                    'id':'Sports_Car',
                    'name': 'Sports_Car',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': [{
                    'id':'42',
                    'name': 'A7_sportback',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'43',
                    'name': 'Audi_R8',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'44',
                    'name': 'Aston_Martin',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'45',
                    'name': 'BMW_Z1',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'46',
                    'name': 'BMW_750',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'47',
                    'name': 'Porsche_911SC',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}]
					},
					{
                    'id':'Taxi',
                    'name': 'Taxi',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': [{
                    'id':'51',
                    'name': 'Innova',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'52',
                    'name': 'Indica',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'53',
                    'name': 'Alto',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'54',
                    'name': 'Swift',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}]
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
                    },'children': [{
                    'id':'55',
                    'name': 'DTC',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'56',
                    'name': 'State_bus',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},/*{
                    'id':'57',
                    'name': 'Alto',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'58',
                    'name': 'Swift',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}*/]
					},{
                    'id':'Private_Bus',
                    'name': 'Private_Bus',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': [{
                    'id':'59',
                    'name': 'Volvo',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'60',
                    'name': 'BMW2390',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'61',
                    'name': 'Audi189',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'62',
                    'name': 'Shatabdi',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}]
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
                    },'children': [{
                    'id':'63',
                    'name': 'Shatabdi',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'64',
                    'name': 'Rajdhani',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'65',
                    'name': 'CRH380A',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'66',
                    'name': 'Transrapid TR09',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'67',
                    'name': 'Shinkansen',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}]
					},{
                    'id':'Mono_Rail',
                    'name': 'Mono_Rail',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': [{
                    'id':'68',
                    'name': 'Kulalumper',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'69',
                    'name': 'Mumbai_monorail',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}]
					},{
                    'id':'Metro',
                    'name': 'Metro',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': [{
                    'id':'70',
                    'name': 'Delhi_metro',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'71',
                    'name': 'Mumbai_monorail',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'72',
                    'name': 'Mumbai_monorail',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}]
					}]
					},
					{
                    'id':'Truck_Transportation',
                    'name': 'Truck_Transportation',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children':[{
                    'id':'73',
                    'name': 'AMW',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'74',
                    'name': 'Tata Trucks',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}]
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
                    },'children': [{
                    'id':'75',
                    'name': 'Dhow',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'76',
                    'name': 'Maserk_Line',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}]
					},
					{
                    'id':'Military_Ship',
                    'name': 'Military_Ship',
                    'data': {
                        '$angularWidth': 180,
                        '$color': '#99f'
                    },'children': [{
                    'id':'77',
                    'name': 'HMM_Hood',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				},{
                    'id':'78',
                    'name': 'USA_Arizona',
                    'data': {
                        '$angularWidth': 40,
                        '$color': '#88f'
                    },'children':[]
				}]
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
