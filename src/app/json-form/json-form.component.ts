import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  inputJson: any = {
    "section": [
      {
        "name": "Leadership",
        "group": [
          {
            "name": "Founder / CEO Assessment",
            "parameters": [
              {
                "name": "Value Congruence",
                "key": "value_congruence",
                "field_type": "input"
              },
              {
                "name": "Ability to attract & retain talent",
                "key": "ability_to_retain_talent",
                "field_type": "slider"
              },
              {
                "name": "Clarity of thought",
                "key": "clarity_of_thought",
                "field_type": "radio_buttons",
                "options": [
                  {
                    "label": "Yes",
                    "value": "yes"
                  },
                  {
                    "label": "No",
                    "value": "no"
                  }
                ]
              },
              {
                "name": "Execution capability",
                "key": "execution_capability",
                "field_type": "slider"
              }
            ]
          }
        ]
      },
      {
        "name": "Exit",
        "group": [
          {
            "name": "IPO",
            "parameters": [
              {
                "name": "Attractiveness to Public Markets",
                "key": "attrractiveness_public_market",
                "field_type": "slider"
              },
              {
                "name": "Estimated Marketcap on exit? (in US$ Bn)",
                "key": "estimated_marketcap",
                "field_type": "input"
              }
            ]
          },
          {
            "name": "Strategic Sale",
            "parameters": [
              {
                "name": "Keeness of Founder / Management",
                "key": "founder_keeness",
                "field_type": "slider"
              },
              {
                "name": "Easily identifiable list of buyers",
                "key": "easily_identifiable",
                "field_type": "slider"
              }
            ]
          },
          {
            "name": "Financial Sponsor",
            "parameters": [
              {
                "name": "Likelihood of the business continuing to deliver PE returns post TN exit?",
                "key": "business_likelihood",
                "field_type": "slider"
              }
            ]
          }
        ]
      }
    ]
  };
  section = this.inputJson["section"];

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }
  dataOutput(data: any) {
    data["section"].forEach((item: any) => {
      let group = item.group;
      group.forEach((elem: any) => {
        let param = elem.parameters;
        param.forEach((field: any) => {
          if(!field["value"]) {
            field["value"] = 0;
          }
          if(field["field_type"]) {
            delete field["field_type"];
          }
          if(field["name"]) {
            delete field["name"];
          }
          if(field["options"]) {
            delete field["options"];
          }
        });
      }); 
    });
    // Here is expected final output
    console.log(JSON.stringify(data));
    // This is current input
    //console.log(JSON.stringify(this.inputJson));
  }
  createOutput() {
    // Do some operation and create output as expected
    let outputSection = JSON.parse(JSON.stringify(this.inputJson));
    this.dataOutput(outputSection);
  }

}
