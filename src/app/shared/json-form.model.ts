export class JsonForm {
    "section": Section[];
}
export class Section {
    "name": string;
    "group": Group[];
}
export class Group {
    "name": string;
    "parameters": Parameters[];
}
export class Parameters {
    "key": string;
    "value": number;
    "name"?: string;
    "field_type"?: string;
    "options"?: Options[];
}
export class Options {
    "label": string;
    "value": string;
}
