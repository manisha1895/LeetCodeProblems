class ParkingSystem {
    big: number;
    medium : number;
    small : number;
    constructor(big: number, medium: number, small: number) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }

    addCar(carType: number): boolean {
        let canPark = false;
        switch(carType){
            case 1 :
                if(this.big > 0 ) {
                    --this.big;
                    canPark = true;
                }
                break;
            case 2 :
                if(this.medium > 0 ) {
                    --this.medium;
                    canPark = true;
                }
                break;
            case 3 :
                if(this.small > 0 ) {
                    --this.small;
                    canPark = true;
                }
                break;
            default : break;
        }
        return canPark;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */