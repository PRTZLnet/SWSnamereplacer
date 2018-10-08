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
	var rel = ['Christian', 'Muslim', 'Secular', 'Atheist', 'Agnostic', 'Hindu', 'Sikh', 'Taoist', 'Shinto', 'Jew', 'Buddhist'];
	var rel_gen = rel[Math.floor(Math.random()*rel.length)];
	var town = ['Hamburg', 'Munich', 'Frankfurt', 'Cologne', 'Dresden', 'Berlin', 'Nuremberg', 'Hanover', 'Bonn', 'Leipzig', 'Stuggart'];
	var town_gen = town[Math.floor(Math.random()*town.length)];
  
	v = v.replace(/\bBuddhistBerlin\b/g, rel_gen+town_gen);
	v = v.replace(/bbuddhistberlin\b/g, rel_gen+town_gen);
	textNode.nodeValue = v;
}
