var block_states_raw = [
	{
		name:"age",
		description:"Tracks the age of plants to handle growth and of fire to handle spread.",
		data:[
			{values:["0","1"],blocks:["Bamboo"]},
			{values:["0","1","2"],blocks:["Cocoa"]},
			{values:["0","1","2","3"],blocks:["Nether Wart","Beetroots","Frosted Ice","Sweet Berry Bush"]},
			{values:["0","1","2","3","4","5"],blocks:["Chorus Flower"]},
			{values:["0","1","2","3","4","5","6","7"],blocks:["Wheat Crops","Pumpkin Stem","Melon Stem","Carrots","Potatoes"]},
			{values:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],blocks:["Fire","Cactus","Sugar Cane"]},
			{values:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],blocks:["Kelp"]}
		]
	},
	{
		name:"attached",
		description:"Whether the tripwire hook is connected to a valid tripwire circuit or not.",
		data:[
			{values:["false","true"],blocks:["Tripwire Hook","Tripwire"]}
		]
	},
	{
		name:"attachment",
		description:"How this block is attached to the block it is on.",
		data:[
			{values:["ceiling","double_wall","floor","single_wall"],blocks:["Bell"]}
		]
	},
	{
		name:"axis",
		description:"What axis the block is oriented to.",
		data:[
			{values:["x","y","z"],blocks:["Oak Log","Spruce Log","Birch Log","Jungle Log","Acacia Log","Dark Oak Log","Stripped Spruce Log","Stripped Birch Log","Stripped Jungle Log","Stripped Acacia Log","Stripped Dark Oak Log","Stripped Oak Log","Oak Wood","Spruce Wood","Birch Wood","Jungle Wood","Acacia Wood","Dark Oak Wood","Stripped Oak Wood","Stripped Spruce Wood","Stripped Birch Wood","Stripped Jungle Wood","Stripped Acacia Wood","Stripped Dark Oak Wood","Quartz Pillar","Hay Bale","Purpur Pillar","Bone Block"]},
			{values:["x","z"],blocks:["Nether Portal"]}
		]
	},
	{
		name:"bites",
		description:"The number of bites taken from the cake.",
		data:[
			{values:["0","1","2","3","4","5","6"],blocks:["Cake"]}
		]
	},
	{
		name:"bottom",
		description:"Whether this scaffolding is floating (shows the bottom).",
		data:[
			{values:["false","true"],blocks:["Scaffolding"]}
		]
	},
	{
		name:"conditional",
		description:"Whether or not the command block is conditional.",
		data:[
			{values:["false","true"],blocks:["Command Block","Repeating Command Block","Chain Command Block"]}
		]
	},
	{
		name:"delay",
		description:"The amount of time between receiving a signal and responding.",
		data:[
			{values:["1","2","3","4"],blocks:["Redstone Repeater"]}
		]
	},
	{
		name:"disarmed",
		description:"Whether the tripwire is broken using shears or not.",
		data:[
			{values:["false","true"],blocks:["Tripwire"]}
		]
	},
	{
		name:"distance",
		description:"The distance from a base block.",
		data:[
			{values:["0","1","2","3","4","5","6","7"],blocks:["Scaffolding"]},
			{values:["1","2","3","4","5","6","7"],blocks:["Oak Leaves","Spruce Leaves","Birch Leaves","Jungle Leaves","Acacia Leaves","Dark Oak Leaves"]}
		]
	},
	{
		name:"down",
		description:"Determines whether something is below the block.",
		data:[
			{values:["false","true"],blocks:["Brown Mushroom Block","Red Mushroom Block","Mushroom Stem","Chorus Plant"]}
		]
	},
	{
		name:"drag",
		description:"Determine whether the bubble column is a whirlpool or upwards.",
		data:[
			{values:["false","true"],blocks:["Bubble Column"]}
		]
	},
	{
		name:"east",
		description:"Determines whether something is on the east side of the block.",
		data:[
			{values:["false","true"],blocks:["Fire","Oak Fence","Brown Mushroom Block","Red Mushroom Block","Mushroom Stem","Iron Bars","Glass Pane","Vines","Nether Brick Fence","Tripwire","Cobblestone Wall","Mossy Cobblestone Wall","White Stained Glass Pane","Orange Stained Glass Pane","Magenta Stained Glass Pane","Light Blue Stained Glass Pane","Yellow Stained Glass Pane","Lime Stained Glass Pane","Pink Stained Glass Pane","Gray Stained Glass Pane","Light Gray Stained Glass Pane","Cyan Stained Glass Pane","Purple Stained Glass Pane","Blue Stained Glass Pane","Brown Stained Glass Pane","Green Stained Glass Pane","Red Stained Glass Pane","Black Stained Glass Pane","Spruce Fence","Birch Fence","Jungle Fence","Acacia Fence","Dark Oak Fence","Chorus Plant","Brick Wall","Prismarine Wall","Sandstone Wall","Red Sandstone Wall","Granite Wall","Diorite Wall","Andesite Wall","End Stone Brick Wall","Nether Brick Wall","Red Nether Brick Wall","Mossy Stone Brick Wall","Stone Brick Wall"]},
			{values:["none","side","up"],blocks:["Redstone Dust"]}
		]
	},
	{
		name:"eggs",
		description:"The amount of eggs in this block.",
		data:[
			{values:["1","2","3","4"],blocks:["Turtle Egg"]}
		]
	},
	{
		name:"enabled",
		description:"Whether or not the hopper can collect and transfer items.",
		data:[
			{values:["false","true"],blocks:["Hopper"]}
		]
	},
	{
		name:"extended",
		description:"Whether or not the piston is extended.",
		data:[
			{values:["false","true"],blocks:["Sticky Piston","Piston"]}
		]
	},
	{
		name:"eye",
		description:"Whether the frame contains an eye of ender.",
		data:[
			{values:["false","true"],blocks:["End Portal Frame"]}
		]
	},
	{
		name:"face",
		description:"What side of a block the attached block is on.",
		data:[
			{values:["ceiling","floor","wall"],blocks:["Lever","Stone Button","Oak Button","Spruce Button","Birch Button","Jungle Button","Acacia Button","Dark Oak Button","Grindstone"]}
		]
	},
	{
		name:"facing",
		description:"What direction the block faces.",
		data:[
			{values:["down","east","north","south","up","west"],blocks:["Dispenser","Sticky Piston","Piston","Piston Head","Moving Piston","Command Block","Dropper","End Rod","Repeating Command Block","Chain Command Block","Observer","Shulker Box","White Shulker Box","Orange Shulker Box","Magenta Shulker Box","Light Blue Shulker Box","Yellow Shulker Box","Lime Shulker Box","Pink Shulker Box","Gray Shulker Box","Light Gray Shulker Box","Cyan Shulker Box","Purple Shulker Box","Blue Shulker Box","Brown Shulker Box","Green Shulker Box","Red Shulker Box","Black Shulker Box","Barrel","Jigsaw Block"]},
			{values:["east","north","south","west"],blocks:["White Bed","Orange Bed","Magenta Bed","Light Blue Bed","Yellow Bed","Lime Bed","Pink Bed","Gray Bed","Light Gray Bed","Cyan Bed","Purple Bed","Blue Bed","Brown Bed","Green Bed","Red Bed","Black Bed","Wall Torch","Oak Stairs","Chest","Furnace","Oak Door","Ladder","Cobblestone Stairs","Spruce Wall Sign","Birch Wall Sign","Birch Wall Sign","Jungle Wall Sign","Acacia Wall Sign","Dark Oak Wall Sign","Lever","Iron Door","Redstone Wall Torch","Stone Button","Carved Pumpkin","Jack o'Lantern","Redstone Repeater","Oak Trapdoor","Spruce Trapdoor","Birch Trapdoor","Jungle Trapdoor","Acacia Trapdoor","Dark Oak Trapdoor","Attached Pumpkin Stem","Attached Melon Stem","Oak Fence Gate","Brick Stairs","Stone Brick Stairs","Nether Brick Stairs","End Portal Frame","Cocoa","Sandstone Stairs","Ender Chest","Tripwire Hook","Spruce Stairs","Birch Stairs","Jungle Stairs","Oak Button","Spruce Button","Birch Button","Jungle Button","Acacia Button","Dark Oak Button","Skeleton Wall Skull","Wither Skeleton Wall Skull","Zombie Wall Head","Player Wall Head","Creeper Wall Head","Dragon Wall Head","Anvil","Chipped Anvil","Damaged Anvil","Trapped Chest","Redstone Comparator","Quartz Stairs","Acacia Stairs","Dark Oak Stairs","Iron Trapdoor","Prismarine Stairs","Prismarine Brick Stairs","Dark Prismarine Stairs","White Wall Banner","Orange Wall Banner","Magenta Wall Banner","Light Blue Wall Banner","Yellow Wall Banner","Lime Wall Banner","Pink Wall Banner","Gray Wall Banner","Light Gray Wall Banner","Cyan Wall Banner","Purple Wall Banner","Blue Wall Banner","Brown Wall Banner","Green Wall Banner","Red Wall Banner","Black Wall Banner","Red Sandstone Stairs","Spruce Fence Gate","Birch Fence Gate","Jungle Fence Gate","Acacia Fence Gate","Dark Oak Fence Gate","Spruce Door","Birch Door","Jungle Door","Acacia Door","Dark Oak Door","Purpur Stairs","White Glazed Terracotta","Orange Glazed Terracotta","Magenta Glazed Terracotta","Light Blue Glazed Terracotta","Yellow Glazed Terracotta","Lime Glazed Terracotta","Pink Glazed Terracotta","Gray Glazed Terracotta","Light Gray Glazed Terracotta","Cyan Glazed Terracotta","Purple Glazed Terracotta","Blue Glazed Terracotta","Brown Glazed Terracotta","Green Glazed Terracotta","Red Glazed Terracotta","Black Glazed Terracotta","Dead Tube Coral Wall Fan","Dead Brain Coral Wall Fan","Dead Bubble Coral Wall Fan","Dead Fire Coral Wall Fan","Dead Horn Coral Wall Fan","Tube Coral Wall Fan","Brain Coral Wall Fan","Bubble Coral Wall Fan","Fire Coral Wall Fan","Horn Coral Wall Fan","Stone Stairs","Granite Stairs","Polished Granite Stairs","Diorite Stairs","Polished Diorite Stairs","Andesite Stairs","Polished Andesite Stairs","End Stone Brick Stairs","Red Nether Brick Stairs","Mossy Stone Brick Stairs","Mossy Cobblestone Stairs","Smooth Sandstone Stairs","Smooth Red Sandstone Stairs","Smooth Quartz Stairs","Loom","Smoker","Blast Furnace","Lectern","Grindstone","Bell","Campfire","Lectern","Stonecutter"]},
			{values:["down","east","north","south","west"],blocks:["Hopper"]}
		]
	},
	{
		name:"half",
		description:"For tall plants and doors, which half of the door or plant occupies the block space. For trapdoors and stairs, what part of the block space they are in.",
		data:[
			{values:["lower","upper"],blocks:["Tall Seagrass","Oak Door","Iron Door","Sunflower","Lilac","Rose Bush","Peony","Tall Grass","Large Fern","Spruce Door","Birch Door","Jungle Door","Acacia Door","Dark Oak Door"]},
			{values:["bottom","top"],blocks:["Oak Stairs","Cobblestone Stairs","Oak Trapdoor","Spruce Trapdoor","Birch Trapdoor","Jungle Trapdoor","Acacia Trapdoor","Dark Oak Trapdoor","Brick Stairs","Stone Brick Stairs","Nether Brick Stairs","Sandstone Stairs","Spruce Stairs","Birch Stairs","Jungle Stairs","Quartz Stairs","Acacia Stairs","Dark Oak Stairs","Iron Trapdoor","Prismarine Stairs","Prismarine Brick Stairs","Dark Prismarine Stairs","Red Sandstone Stairs","Purpur Stairs","Stone Stairs","Granite Stairs","Polished Granite Stairs","Diorite Stairs","Polished Diorite Stairs","Andesite Stairs","Polished Andesite Stairs","End Stone Brick Stairs","Red Nether Brick Stairs","Mossy Stone Brick Stairs","Mossy Cobblestone Stairs","Smooth Sandstone Stairs","Smooth Red Sandstone Stairs","Smooth Quartz Stairs"]}
		]
	},
	{
		name:"hanging",
		description:"Whether or not the lantern hangs on the ceiling.",
		data:[
			{values:["false","true"],blocks:["Lantern"]}
		]
	},
	{
		name:"has_book",
		description:"Whether or not this lectern holds a book.",
		data:[
			{values:["false","true"],blocks:["Lectern"]}
		]
	},
	{
		name:"has_bottle_0",
		description:"Whether or not a bottle is in slot 1 of the brewing stand.",
		data:[
			{values:["false","true"],blocks:["Brewing Stand"]}
		]
	},
	{
		name:"has_bottle_1",
		description:"Whether or not a bottle is in slot 2 of the brewing stand.",
		data:[
			{values:["false","true"],blocks:["Brewing Stand"]}
		]
	},
	{
		name:"has_bottle_2",
		description:"Whether or not a bottle is in slot 3 of the brewing stand.",
		data:[
			{values:["false","true"],blocks:["Brewing Stand"]}
		]
	},
	{
		name:"has_record",
		description:"True when the jukebox contains a music disc.",
		data:[
			{values:["false","true"],blocks:["Jukebox"]}
		]
	},
	{
		name:"hatch",
		description:"Determines how close an egg is to hatching; starts at 0 and is randomly incremented.",
		data:[
			{values:["0","1","2"],blocks:["Turtle Egg"]}
		]
	},
	{
		name:"hinge",
		description:"Identifies the side the hinge is on (when facing the same direction as the door's inside).",
		data:[
			{values:["left","right"],blocks:["Oak Door","Iron Door","Spruce Door","Birch Door","Jungle Door","Acacia Door","Dark Oak Door"]}
		]
	},
	{
		name:"in_wall",
		description:"If true, the gate is lowered by three pixels, to accommodate attaching more cleanly with walls.",
		data:[
			{values:["false","true"],blocks:["Oak Fence Gate","Spruce Fence Gate","Birch Fence Gate","Jungle Fence Gate","Acacia Fence Gate","Dark Oak Fence Gate"]}
		]
	},
	{
		name:"instrument",
		description:"The instrument sound the note block makes when it gets powered or used.",
		data:[
			{values:["banjo","basedrum","bass","bell","chime","flute","guitar","harp","hat","snare","xylophone"],blocks:["Note Block"]}
		]
	},
	{
		name:"inverted",
		description:"Whether the daylight detector detects light (false) or darkness (true).",
		data:[
			{values:["false","true"],blocks:["Daylight Detector"]}
		]
	},
	{
		name:"layers",
		description:"How many layers of snow are on top of each other.",
		data:[
			{values:["1","2","3","4","5","6","7","8"],blocks:["Snow"]}
		]
	},
	{
		name:"leaves",
		description:"How big the leaves are on this bamboo.",
		data:[
			{values:["large","none","small"],blocks:["Bamboo"]}
		]
	},
	{
		name:"level",
		description:"How much water or lava is in this block or cauldron.",
		data:[
			{values:["0","1","2","3"],blocks:["Cauldron"]},
			{values:["0","1","2","3","4","5","6","7","8"],blocks:["Composter"]},
			{values:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],blocks:["Water","Lava"]}
		]
	},
	{
		name:"lit",
		description:"Whether the block is turned on or off.",
		data:[
			{values:["false","true"],blocks:["Furnace","Redstone Ore","Redstone Torch","Redstone Wall Torch","Redstone Lamp","Smoker","Blast Furnace","Campfire"]}
		]
	},
	{
		name:"locked",
		description:"Whether the repeater can change it is powered state (false) or not (true).",
		data:[
			{values:["false","true"],blocks:["Redstone Repeater"]}
		]
	},
	{
		name:"mode",
		description:"The mode the comparator or structure block is in.",
		data:[
			{values:["compare","subtract"],blocks:["Redstone Comparator"]},
			{values:["corner","data","load","save"],blocks:["Structure Block"]}
		]
	},
	{
		name:"moisture",
		description:"How wet the farmland is.",
		data:[
			{values:["0","1","2","3","4","5","6","7"],blocks:["Farmland"]}
		]
	},
	{
		name:"north",
		description:"Determines whether something is on the north side of the block.",
		data:[
			{values:["false","true"],blocks:["Fire","Oak Fence","Brown Mushroom Block","Red Mushroom Block","Mushroom Stem","Iron Bars","Glass Pane","Vines","Nether Brick Fence","Tripwire","Cobblestone Wall","Mossy Cobblestone Wall","White Stained Glass Pane","Orange Stained Glass Pane","Magenta Stained Glass Pane","Light Blue Stained Glass Pane","Yellow Stained Glass Pane","Lime Stained Glass Pane","Pink Stained Glass Pane","Gray Stained Glass Pane","Light Gray Stained Glass Pane","Cyan Stained Glass Pane","Purple Stained Glass Pane","Blue Stained Glass Pane","Brown Stained Glass Pane","Green Stained Glass Pane","Red Stained Glass Pane","Black Stained Glass Pane","Spruce Fence","Birch Fence","Jungle Fence","Acacia Fence","Dark Oak Fence","Chorus Plant","Brick Wall","Prismarine Wall","Sandstone Wall","Red Sandstone Wall","Granite Wall","Diorite Wall","Andesite Wall","End Stone Brick Wall","Nether Brick Wall","Red Nether Brick Wall","Mossy Stone Brick Wall","Stone Brick Wall"]},
			{values:["up","side","none"],blocks:["Redstone Dust"]}
		]
	},
	{
		name:"note",
		description:"The note the note block will play when it gets powered.",
		data:[
			{values:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],blocks:["Note Block"]}
		]
	},
	{
		name:"occupied",
		description:"If there's already a player in this bed.",
		data:[
			{values:["false","true"],blocks:["White Bed","Orange Bed","Magenta Bed","Light Blue Bed","Yellow Bed","Lime Bed","Pink Bed","Gray Bed","Light Gray Bed","Cyan Bed","Purple Bed","Blue Bed","Brown Bed","Green Bed","Red Bed","Black Bed"]}
		]
	},
	{
		name:"open",
		description:"Whether the door is open or closed.",
		data:[
			{values:["false","true"],blocks:["Oak Door","Iron Door","Oak Trapdoor","Spruce Trapdoor","Birch Trapdoor","Jungle Trapdoor","Acacia Trapdoor","Dark Oak Trapdoor","Oak Fence Gate","Iron Trapdoor","Spruce Fence Gate","Birch Fence Gate","Jungle Fence Gate","Acacia Fence Gate","Dark Oak Fence Gate","Spruce Door","Birch Door","Jungle Door","Acacia Door","Dark Oak Door","Barrel"]}
		]
	},
	{
		name:"part",
		description:"Whether this is the foot or head end of the bed.",
		data:[
			{values:["foot","head"],blocks:["White Bed","Orange Bed","Magenta Bed","Light Blue Bed","Yellow Bed","Lime Bed","Pink Bed","Gray Bed","Light Gray Bed","Cyan Bed","Purple Bed","Blue Bed","Brown Bed","Green Bed","Red Bed","Black Bed"]}
		]
	},
	{
		name:"persistent",
		description:"Whether leaves will decay (false) or not (true)",
		data:[
			{values:["false","true"],blocks:["Oak Leaves","Spruce Leaves","Birch Leaves","Jungle Leaves","Acacia Leaves","Dark Oak Leaves"]}
		]
	},
	{
		name:"pickles",
		description:"The amount of pickles in this block.",
		data:[
			{values:["1","2","3","4"],blocks:["Sea Pickle"]}
		]
	},
	{
		name:"power",
		description:"The power level of Redstone emission.",
		data:[
			{values:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],blocks:["Redstone Dust","Light Weighted Pressure Plate","Heavy Weighted Pressure Plate","Daylight Detector"]}
		]
	},
	{
		name:"powered",
		description:"Whether the block is powered.",
		data:[
			{values:["false","true"],blocks:["Note Block","Powered Rail","Detector Rail","Oak Door","Lever","Stone Pressure Plate","Iron Door","Oak Pressure Plate","Spruce Pressure Plate","Birch Pressure Plate","Jungle Pressure Plate","Acacia Pressure Plate","Dark Oak Pressure Plate","Stone Button","Redstone Repeater","Oak Trapdoor","Spruce Trapdoor","Birch Trapdoor","Jungle Trapdoor","Acacia Trapdoor","Dark Oak Trapdoor","Oak Fence Gate","Tripwire Hook","Tripwire","Oak Button","Spruce Button","Birch Button","Jungle Button","Acacia Button","Dark Oak Button","Redstone Comparator","Activator Rail","Iron Trapdoor","Spruce Fence Gate","Birch Fence Gate","Jungle Fence Gate","Acacia Fence Gate","Dark Oak Fence Gate","Spruce Door","Birch Door","Jungle Door","Acacia Door","Dark Oak Door","Observer","Lectern"]}
		]
	},
	{
		name:"rotation",
		description:"The rotation of standing heads, signs and banners.",
		data:[
			{values:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],blocks:["Sign","Spruce Sign","Birch Sign","Jungle Sign","Acacia Sign","Dark Oak Sign","Skeleton Skull","Wither Skeleton Skull","Zombie Head","Player Head","Creeper Head","Dragon Head","White Banner","Orange Banner","Magenta Banner","Light Blue Banner","Yellow Banner","Lime Banner","Pink Banner","Gray Banner","Light Gray Banner","Cyan Banner","Purple Banner","Blue Banner","Brown Banner","Green Banner","Red Banner","Black Banner"]}
		]
	},
	{
		name:"shape",
		description:"The way this block connects to its neighbors.",
		data:[
			{values:["ascending_east","ascending_north","ascending_south","ascending_west","east_west","north_south"],blocks:["Powered Rail","Detector Rail","Activator Rail"]},
			{values:["inner_left","inner_right","outer_left","outer_right","straight"],blocks:["Oak Stairs","Cobblestone Stairs","Brick Stairs","Stone Brick Stairs","Nether Brick Stairs","Sandstone Stairs","Spruce Stairs","Birch Stairs","Jungle Stairs","Quartz Stairs","Acacia Stairs","Dark Oak Stairs","Prismarine Stairs","Prismarine Brick Stairs","Dark Prismarine Stairs","Red Sandstone Stairs","Purpur Stairs","Stone Stairs","Granite Stairs","Polished Granite Stairs","Diorite Stairs","Polished Diorite Stairs","Andesite Stairs","Polished Andesite Stairs","End Stone Brick Stairs","Red Nether Brick Stairs","Mossy Stone Brick Stairs","Mossy Cobblestone Stairs","Smooth Sandstone Stairs","Smooth Red Sandstone Stairs","Smooth Quartz Stairs"]},
			{values:["east_west","north_east","north_south","north_west","south_east","south_west","ascending_east","ascending_north","ascending_south","ascending_west"],blocks:["Rail"]}
		]
	},
	{
		name:"short",
		description:"Whether this piston head's arm is 4/16th of a block shorter",
		data:[
			{values:["false","true"],blocks:["Piston Head"]}
		]
	},
	{
		name:"signal_fire",
		description:"Whether this campfire has higher smoke or not.",
		data:[
			{values:["false","true"],blocks:["Campfire"]}
		]
	},
	{
		name:"snowy",
		description:"Whether this block uses the snowy side texture.",
		data:[
			{values:["false","true"],blocks:["Grass Block","Podzol","Mycelium"]}
		]
	},
	{
		name:"south",
		description:"Determines whether something is on the south side of the block.",
		data:[
			{values:["false","true"],blocks:["Fire","Oak Fence","Brown Mushroom Block","Red Mushroom Block","Mushroom Stem","Iron Bars","Glass Pane","Vines","Nether Brick Fence","Tripwire","Cobblestone Wall","Mossy Cobblestone Wall","White Stained Glass Pane","Orange Stained Glass Pane","Magenta Stained Glass Pane","Light Blue Stained Glass Pane","Yellow Stained Glass Pane","Lime Stained Glass Pane","Pink Stained Glass Pane","Gray Stained Glass Pane","Light Gray Stained Glass Pane","Cyan Stained Glass Pane","Purple Stained Glass Pane","Blue Stained Glass Pane","Brown Stained Glass Pane","Green Stained Glass Pane","Red Stained Glass Pane","Black Stained Glass Pane","Spruce Fence","Birch Fence","Jungle Fence","Acacia Fence","Dark Oak Fence","Chorus Plant","Brick Wall","Prismarine Wall","Sandstone Wall","Red Sandstone Wall","Granite Wall","Diorite Wall","Andesite Wall","End Stone Brick Wall","Nether Brick Wall","Red Nether Brick Wall","Mossy Stone Brick Wall","Stone Brick Wall"]},
			{values:["none","side","up"],blocks:["Redstone Dust"]}
		]
	},
	{
		name:"stage",
		description:"Whether this sapling is ready to grow.",
		data:[
			{values:["0","1"],blocks:["Oak Sapling","Spruce Sapling","Birch Sapling","Jungle Sapling","Acacia Sapling","Dark Oak Sapling","Bamboo","Bamboo Sapling"]}
		]
	},
	{
		name:"triggered",
		description:"Whether this block has been activated.",
		data:[
			{values:["false","true"],blocks:["Dispenser","Dropper"]}
		]
	},
	{
		name:"type",
		description:"Determines the variant of this block.",
		data:[
			{values:["normal","sticky"],blocks:["Piston Head","Moving Piston"]},
			{values:["left","right","single"],blocks:["Chest","Trapped Chest"]},
			{values:["bottom","top","double"],blocks:["Prismarine Slab","Prismarine Brick Slab","Dark Prismarine Slab","Oak Slab","Spruce Slab","Birch Slab","Jungle Slab","Acacia Slab","Dark Oak Slab","Stone Slab","Sandstone Slab","Petrified Oak Slab","Cobblestone Slab","Brick Slab","Stone Brick Slab","Nether Brick Slab","Quartz Slab","Red Sandstone Slab","Purpur Slab","Stone Slab","Granite Slab","Polished Granite Slab","Diorite Slab","Polished Diorite Slab","Andesite Slab","Polished Andesite Slab","End Stone Brick Slab","Red Nether Brick Slab","Mossy Stone Brick Slab","Mossy Cobblestone Slab","Smooth Sandstone Slab","Smooth Red Sandstone Slab","Smooth Quartz Slab"]}
		]
	},
	{
		name:"unstable",
		description:"Whether the tnt will explode when punched or not.",
		data:[
			{values:["false","true"],blocks:["TNT"]}
		]
	},
	{
		name:"up",
		description:"Determines whether something is above the block.",
		data:[
			{values:["false","true"],blocks:["Fire","Brown Mushroom Block","Red Mushroom Block","Mushroom Stem","Vines","Cobblestone Wall","Mossy Cobblestone Wall","Chorus Plant","Brick Wall","Prismarine Wall","Sandstone Wall","Red Sandstone Wall","Granite Wall","Diorite Wall","Andesite Wall","End Stone Brick Wall","Nether Brick Wall","Red Nether Brick Wall","Mossy Stone Brick Wall","Stone Brick Wall"]}
		]
	},
	{
		name:"waterlogged",
		description:"Whether the block has water in it.",
		data:[
			{values:["false","true"],blocks:["Oak Stairs","Chest","Sign","Spruce Sign","Birch Sign","Jungle Sign","Acacia Sign","Dark Oak Sign","Ladder","Cobblestone Stairs","Wall Sign","Spruce Wall Sign","Birch Wall Sign","Jungle Wall Sign","Acacia Wall Sign","Dark Oak Wall Sign","Oak Fence","Oak Trapdoor","Spruce Trapdoor","Birch Trapdoor","Jungle Trapdoor","Acacia Trapdoor","Dark Oak Trapdoor","Iron Bars","Glass Pane","Brick Stairs","Stone Brick Stairs","Nether Brick Fence","Nether Brick Stairs","Sandstone Stairs","Ender Chest","Spruce Stairs","Birch Stairs","Jungle Stairs","Cobblestone Wall","Mossy Cobblestone Wall","Trapped Chest","Quartz Stairs","White Stained Glass Pane","Orange Stained Glass Pane","Magenta Stained Glass Pane","Light Blue Stained Glass Pane","Yellow Stained Glass Pane","Lime Stained Glass Pane","Pink Stained Glass Pane","Gray Stained Glass Pane","Light Gray Stained Glass Pane","Cyan Stained Glass Pane","Purple Stained Glass Pane","Blue Stained Glass Pane","Brown Stained Glass Pane","Green Stained Glass Pane","Red Stained Glass Pane","Black Stained Glass Pane","Acacia Stairs","Dark Oak Stairs","Iron Trapdoor","Prismarine Stairs","Prismarine Brick Stairs","Dark Prismarine Stairs","Prismarine Slab","Prismarine Brick Slab","Dark Prismarine Slab","Red Sandstone Stairs","Oak Slab","Spruce Slab","Birch Slab","Jungle Slab","Acacia Slab","Dark Oak Slab","Stone Slab","Sandstone Slab","Petrified Oak Slab","Cobblestone Slab","Brick Slab","Stone Brick Slab","Nether Brick Slab","Quartz Slab","Red Sandstone Slab","Purpur Slab","Spruce Fence","Birch Fence","Jungle Fence","Acacia Fence","Dark Oak Fence","Purpur Stairs","Dead Tube Coral","Dead Brain Coral","Dead Bubble Coral","Dead Fire Coral","Dead Horn Coral","Tube Coral","Brain Coral","Bubble Coral","Fire Coral","Horn Coral","Dead Tube Coral Wall Fan","Dead Brain Coral Wall Fan","Dead Bubble Coral Wall Fan","Dead Fire Coral Wall Fan","Dead Horn Coral Wall Fan","Tube Coral Wall Fan","Brain Coral Wall Fan","Bubble Coral Wall Fan","Fire Coral Wall Fan","Horn Coral Wall Fan","Dead Tube Coral Fan","Dead Brain Coral Fan","Dead Bubble Coral Fan","Dead Fire Coral Fan","Dead Horn Coral Fan","Tube Coral Fan","Brain Coral Fan","Bubble Coral Fan","Fire Coral Fan","Horn Coral Fan","Sea Pickle","Conduit","Stone Slab","Granite Slab","Polished Granite Slab","Diorite Slab","Polished Diorite Slab","Andesite Slab","Polished Andesite Slab","End Stone Brick Slab","Red Nether Brick Slab","Mossy Stone Brick Slab","Mossy Cobblestone Slab","Smooth Sandstone Slab","Smooth Red Sandstone Slab","Smooth Quartz Slab","Stone Stairs","Granite Stairs","Polished Granite Stairs","Diorite Stairs","Polished Diorite Stairs","Andesite Stairs","Polished Andesite Stairs","End Stone Brick Stairs","Red Nether Brick Stairs","Mossy Stone Brick Stairs","Mossy Cobblestone Stairs","Smooth Sandstone Stairs","Smooth Red Sandstone Stairs","Smooth Quartz Stairs","Brick Wall","Prismarine Wall","Sandstone Wall","Red Sandstone Wall","Granite Wall","Diorite Wall","Andesite Wall","End Stone Brick Wall","Nether Brick Wall","Red Nether Brick Wall","Mossy Stone Brick Wall","Stone Brick Wall","Scaffolding","Campfire"]}
		]
	},
	{
		name:"west",
		description:"Determines whether something is on the west side of the block.",
		data:[
			{values:["false","true"],blocks:["Fire","Oak Fence","Brown Mushroom Block","Red Mushroom Block","Mushroom Stem","Iron Bars","Glass Pane","Vines","Nether Brick Fence","Tripwire","Cobblestone Wall","Mossy Cobblestone Wall","White Stained Glass Pane","Orange Stained Glass Pane","Magenta Stained Glass Pane","Light Blue Stained Glass Pane","Yellow Stained Glass Pane","Lime Stained Glass Pane","Pink Stained Glass Pane","Gray Stained Glass Pane","Light Gray Stained Glass Pane","Cyan Stained Glass Pane","Purple Stained Glass Pane","Blue Stained Glass Pane","Brown Stained Glass Pane","Green Stained Glass Pane","Red Stained Glass Pane","Black Stained Glass Pane","Spruce Fence","Birch Fence","Jungle Fence","Acacia Fence","Dark Oak Fence","Chorus Plant","Brick Wall","Prismarine Wall","Sandstone Wall","Red Sandstone Wall","Granite Wall","Diorite Wall","Andesite Wall","End Stone Brick Wall","Nether Brick Wall","Red Nether Brick Wall","Mossy Stone Brick Wall","Stone Brick Wall"]},
			{values:["none","side","up"],blocks:["Redstone Dust"]}
		]
	}
]
