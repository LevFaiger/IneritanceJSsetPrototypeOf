const Roller = {
    will: function(){
        console.log(`${this.name} like to begin skating`)
    },
    haveTime:function(){
          console.log(`${this.name} have time to sckating skating`)
    }
}

const RollerMaster = {
    expirience : function(){
          console.log(`${this.name} like to begin skating`)
    }
}

function CreateRoller(_name){
    const roller = Object.create(Roller);
    roller.name = _name;
    return roller;
}

function CreateMaster(_name){
    const master = Object.create(Roller);
    master.name=_name;
    Object.setPrototypeOf(master,RollerMaster);
    return master;
}

Object.setPrototypeOf(RollerMaster, Roller);