
const log = (message)=>{

    console.log("hello "+message)
}


const add = (n1,n2)=>{

    n3 = n1 + n2
    console.log(n3)
}

const loops  = (n) =>{
    for(let i = 0; i <=n; i++){
        console.log("its "+i)
    }
}

module.exports.log = log
module.exports.add = add
module.exports.loops = loops