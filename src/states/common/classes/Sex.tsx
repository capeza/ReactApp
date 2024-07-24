export enum Fields {
  ID,
  NAME,
}

export interface ISex {
  id: number;
  name: string;
}

export default class Sex {
  id: number;
  name: string;

  constructor(item: ISex) {
    this.id = item.id;
    this.name = item.name;
  }

  get [Fields.ID](): number {
    return this.id;
  }

  get [Fields.NAME](): string {
    return this.name;
  }

  static columnTitleCallBack = (field: Fields): string => {
    switch (field) {
      case Fields.ID:
        return 'Number';
      case Fields.NAME:
        return 'Name';
    }
  };
}
