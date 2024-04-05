export class Country{
  constructor(name, flag, flagIcon = '', flagAlt= ''){
    this._name = name;
    this._flag = flag;
    this._flagIcon = flagIcon
    this._flagAlt = flagAlt
  }
  get name() {
    return this._name;
  }
  get flag(){
    return this._flag;
  }
  get flagIcon(){
    return this._flagIcon;
  }
  get flagAlt(){
    return this._flagAlt;
  }
}
