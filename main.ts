/**
 * Testing blocks layout in menu.
 */
//% color="#303030" weight=100 icon="\uf0e7"
//% groups='["GroupA", "GroupB", "GroupC", "GroupD", "GroupE"]'
namespace tempTest {

    let myClass: MyClass = null

    /**
     * Button state
     */
    export enum ButtonState {
        //% block=Released
        Released = 0,
        //% block=Pressed
        Pressed = 1
    }

    function hiddenFunction(buttonState: ButtonState): Number {
        return 2
    }

    /**
     * Initialize something
     */
    //% block="Initialize"
    //% blockId="tempTest_intializee"
    //% port.fieldEditor="gridpicker" port.fieldOptions.columns=2
    //% group="GroupA"
    //% weight=90
    export function intialize(): void {
        myClass = new MyClass(0)
    }

    /**
     * Get something
     */
    //% block="GetSomething"
    //% blockId="tempTest_getSomething"
    //% port.fieldEditor="gridpicker" port.fieldOptions.columns=2
    //% group="GroupC"
    //% weight=89
    export function getSomething(): ButtonState {
        return ButtonState.Pressed
    }

    /**
     * Abstraction for led matrices
     */
    class MyClass {
        x: number

        constructor(x: number) {
            this.x = x
        }
    
        /**
         * Set x
         * @param x x [0,255]
        */
        public setX(x: number): void {
            this.x = x
        }
    }

    /**
     * Set x
     * @param x x [0,255]
    */
    //% block="Set x|x %x"
    //% blockId="tempTest_setX"
    //% x.min=0 x.max=255
    //% x.fieldEditor="gridpicker" x.fieldOptions.columns=2
    //% inlineInputMode=inline
    //% group="GroupD"
    //% weight=30
    export function setX(x: number): void {
        myClass.setX(x)
    }
}
