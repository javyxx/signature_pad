// Interface for point data structure used e.g. in SignaturePad#fromData method
export interface IBasicPoint {
  x: number;
  y: number;
  time: number;
  presure?: number;
  tiltX?: number;
  tiltY?: number;
}

export class Point implements IBasicPoint {
  public time: number;
  public presure: number | undefined;
  public tiltX: number | undefined;
  public tiltY: number | undefined;

  constructor(public x: number, public y: number, time?: number, presure?: number, tiltX?: number, tiltY?: number) {
    this.time = time || Date.now();
    if(presure){
      this.presure =  presure as number;
    }
    if(tiltX){
      this.tiltX =  tiltX as number;
    }
    if(tiltY){
      this.tiltY =  tiltY as number;
    }
  }

  public distanceTo(start: IBasicPoint): number {
    return Math.sqrt(
      Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2),
    );
  }

  public equals(other: IBasicPoint): boolean {
    return this.x === other.x && this.y === other.y && this.time === other.time;
  }

  public velocityFrom(start: IBasicPoint): number {
    return this.time !== start.time
      ? this.distanceTo(start) / (this.time - start.time)
      : 0;
  }
}
