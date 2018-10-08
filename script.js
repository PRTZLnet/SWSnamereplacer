//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	var things = ['Christian', 'Muslim', 'Secular', 'Atheist', 'Agnostic', 'Hindu', 'Sikh', 'Taoist', 'Shinto', 'Jew', 'Buddhist'];
	var thing = things[Math.floor(Math.random()*things.length)];
	var thingstwo = ['Hamburg', 'Munich', 'Frankfurt', 'Cologne', 'Dresden', 'Berlin', 'Nuremberg', 'Hanover', 'Bonn', 'Leipzig', 'Stuggart'];
	var thingtwo = thingstwo[Math.floor(Math.random()*thingstwo.length)];
  
	v = v.replace(/\bBuddhistBerlin\b/g, "${thing}");
	v = v.replace(/BuddhistBerlin\b/g, "${thing}");
	textNode.nodeValue = v;
}
