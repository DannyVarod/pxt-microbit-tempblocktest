/**
 * Testing blocks layout in menu.
 */
//% color="#303030" weight=100 icon="\uf0e7"
//% groups='["GroupA", "GroupB", "GroupC", "GroupD", "GroupE"]'
namespace tempTest {

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
    //% blockId="tempTest_intialize"
    //% group="GroupA"
    //% weight=90
    export function intialize(): void {
        hiddenFunction(ButtonState.Pressed)
    }

    /**
     * Get something
     */
    //% block="GetSomething"
    //% blockId="tempTest_getSomething"
    //% group="GroupC"
    //% weight=89
    export function getSomething(): ButtonState {
        return ButtonState.Pressed
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
    }
}
