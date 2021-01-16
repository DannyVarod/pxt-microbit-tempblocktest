/**
 * Testing blocks layout in menu.
 */
//% color="#303030" weight=100 icon="\uf0e7"
//% groups='["GroupA", "GroupB", "GroupC", "GroupD", "GroupE"]'
namespace tempTest {

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
