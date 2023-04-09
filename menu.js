const menu = {
    title: 'Menu',
    children: [
        {
            title: 'Home',
            children: [
                {
                title: 'sub menu 1'
                },
                {
                    title: 'sub menu 2'
                }
            ]
        },
        {
            title: 'About'
        }
    ]
}
function start(node){
    console.log('node:', node.title); debugger;
    if(node.children){
        node.children.forEach(function(child){
            start(child);
        })
    }
}

start(menu);