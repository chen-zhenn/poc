export function utils(){
    let id = 0
    function setId():void{
        id = id + 1
    }
    function getId():number{
        setId()
        return id
    }
    return {
        getId
    }
}