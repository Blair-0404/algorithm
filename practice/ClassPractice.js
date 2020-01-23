class ClassPractice {
    constructor(brand, color, maxVelocity) {
        this.brand = brand;
        this.color = color;
        this.velocity = 0;
        this.maxVelocity = maxVelocity;
        this.intro = '차의 이름은 ' + this.brand + '이고 색상은 ' + this.color + '이며, 최대 시속은 ' + this.maxVelocity + 'km의 속도의 성능을 갖고있습니다.';
    }

    run() {
        switch (this.brand) {
            case 'abante' :
                if (this.velocity >= this.maxVelocity) {
                    console.log('속도를 내려주세요');
                    return;
                }
                this.velocity += 10;
                break;
            case 'sonata' :
                if (this.velocity >= this.maxVelocity) {
                    console.log('속도를 내려주세요');
                    return;
                }
                this.velocity += 20;
                break;
            case 'genesis' :
                if (this.velocity >= this.maxVelocity) {
                    console.log('속도를 내려주세요');
                    return;
                }
                this.velocity += 30;
                break;
        }
    }

    brake() {
        switch (this.brand) {
            case 'abante' :
                if (this.velocity <= 0) {
                    throw new Error('속도를 올려주세요');
                }
                this.velocity -= 5;
                break;
            case 'sonata' :
                if (this.velocity <= 0) {
                    throw new Error('속도를 올려주세요');
                }
                this.velocity -= 10;
                break;
            case 'genesis' :
                if (this.velocity <= 0) {
                    throw new Error('속도를 올려주세요');
                }
                this.velocity -= 15;
                break;
        }
    }

    checkCurrentVelocity() {
        let currentVelocity = this.velocity;
        return currentVelocity;
    }
}

const abante =  new ClassPractice('abante', 'white', 30);
const sonata =  new ClassPractice('sonata', 'silver', 50);
const genesis =  new ClassPractice('genesis', 'black', 100);

abante.run()
// abante.run()
// abante.run()
// abante.run()
// console.log(abante.checkCurrentVelocity());
console.log(abante.run());


// genesis.run();
// genesis.run();
// genesis.brake();
// genesis.brake();

// console.log(abante.velocity);
