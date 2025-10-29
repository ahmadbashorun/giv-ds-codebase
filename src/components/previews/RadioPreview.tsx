import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import exampleImage from "figma:asset/d47cd06dc2cf5c6cf09bb266a0c968bc1bc796e3.png";

export function RadioPreview() {
  const [formData, setFormData] = useState({
    shiftType: "regular",
    reportingMethod: "mobile-app",
    clientStatus: "active",
    billingFrequency: "weekly",
  });

  const handleRadioChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Radio Sizes */}
      <div className="space-y-4">
        <h4 className="h6-heading">Radio Button Sizes</h4>
        <div className="grid grid-cols-3 gap-6">
          {/* Large - 24px */}
          <div className="space-y-3">
            <h5 className="h7-heading">Large (24px)</h5>
            <div className="space-y-3">
              <RadioGroup
                defaultValue="selected"
                className="gap-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    id="large-default"
                    value="default"
                    className="size-6"
                  />
                  <Label
                    htmlFor="large-default"
                    className="paragraph-small-medium cursor-pointer"
                  >
                    Default
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    id="large-selected"
                    value="selected"
                    className="size-6"
                  />
                  <Label
                    htmlFor="large-selected"
                    className="paragraph-small-medium cursor-pointer"
                  >
                    Selected
                  </Label>
                </div>
              </RadioGroup>
              <div className="flex items-center space-x-3">
                <RadioGroup defaultValue="">
                  <RadioGroupItem
                    id="large-disabled"
                    value="disabled"
                    disabled
                    className="size-6"
                  />
                </RadioGroup>
                <Label
                  htmlFor="large-disabled"
                  className="paragraph-small-medium text-muted-foreground cursor-not-allowed"
                >
                  Disabled
                </Label>
              </div>
            </div>
          </div>

          {/* Medium - 20px */}
          <div className="space-y-3">
            <h5 className="h7-heading">Medium (20px)</h5>
            <div className="space-y-3">
              <RadioGroup
                defaultValue="selected"
                className="gap-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    id="medium-default"
                    value="default"
                    className="size-5"
                  />
                  <Label
                    htmlFor="medium-default"
                    className="paragraph-small-medium cursor-pointer"
                  >
                    Default
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    id="medium-selected"
                    value="selected"
                    className="size-5"
                  />
                  <Label
                    htmlFor="medium-selected"
                    className="paragraph-small-medium cursor-pointer"
                  >
                    Selected
                  </Label>
                </div>
              </RadioGroup>
              <div className="flex items-center space-x-3">
                <RadioGroup defaultValue="">
                  <RadioGroupItem
                    id="medium-disabled"
                    value="disabled"
                    disabled
                    className="size-5"
                  />
                </RadioGroup>
                <Label
                  htmlFor="medium-disabled"
                  className="paragraph-small-medium text-muted-foreground cursor-not-allowed"
                >
                  Disabled
                </Label>
              </div>
            </div>
          </div>

          {/* Small - 16px */}
          <div className="space-y-3">
            <h5 className="h7-heading">Small (16px)</h5>
            <div className="space-y-3">
              <RadioGroup
                defaultValue="selected"
                className="gap-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    id="small-default"
                    value="default"
                    className="size-4"
                  />
                  <Label
                    htmlFor="small-default"
                    className="paragraph-small-medium cursor-pointer"
                  >
                    Default
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    id="small-selected"
                    value="selected"
                    className="size-4"
                  />
                  <Label
                    htmlFor="small-selected"
                    className="paragraph-small-medium cursor-pointer"
                  >
                    Selected
                  </Label>
                </div>
              </RadioGroup>
              <div className="flex items-center space-x-3">
                <RadioGroup defaultValue="">
                  <RadioGroupItem
                    id="small-disabled"
                    value="disabled"
                    disabled
                    className="size-4"
                  />
                </RadioGroup>
                <Label
                  htmlFor="small-disabled"
                  className="paragraph-small-medium text-muted-foreground cursor-not-allowed"
                >
                  Disabled
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Label Positioning */}
      <div className="space-y-4">
        <h4 className="h6-heading">Label Positioning</h4>
        <div className="grid grid-cols-1 gap-6">
          {/* Radio on Left */}
          <div className="space-y-4">
            <h5 className="h7-heading">Radio Button on Left</h5>
            <div className="space-y-3">
              <RadioGroup
                value={formData.reportingMethod}
                onValueChange={(value) =>
                  handleRadioChange("reportingMethod", value)
                }
                className="gap-3"
              >
                {/* Label Only - Top Aligned */}
                <div className="flex items-start space-x-3">
                  <RadioGroupItem
                    id="left-mobile-app"
                    value="mobile-app"
                    className="mt-0.5 size-5"
                  />
                  <div className="flex flex-col">
                    <Label
                      htmlFor="left-mobile-app"
                      className="paragraph-small-medium cursor-pointer"
                    >
                      Mobile app reporting
                    </Label>
                  </div>
                </div>

                {/* Label and Caption - Top Aligned */}
                <div className="flex items-start space-x-3">
                  <RadioGroupItem
                    id="left-phone-call"
                    value="phone-call"
                    className="mt-0.5 size-5"
                  />
                  <div className="flex flex-col">
                    <Label
                      htmlFor="left-phone-call"
                      className="paragraph-small-medium cursor-pointer"
                    >
                      Phone call reporting
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      For urgent incidents requiring immediate
                      attention
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <RadioGroupItem
                    id="left-written-form"
                    value="written-form"
                    className="mt-0.5 size-5"
                  />
                  <div className="flex flex-col">
                    <Label
                      htmlFor="left-written-form"
                      className="paragraph-small-medium cursor-pointer"
                    >
                      Written form submission
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      For detailed documentation when mobile app
                      is unavailable
                    </span>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Radio on Right */}
          <div className="space-y-4">
            <h5 className="h7-heading">
              Radio Button on Right
            </h5>
            <div className="space-y-3">
              <RadioGroup
                value={formData.clientStatus}
                onValueChange={(value) =>
                  handleRadioChange("clientStatus", value)
                }
                className="gap-3"
              >
                {/* Label Only - Center Aligned */}
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="right-active"
                    className="paragraph-small-medium cursor-pointer"
                  >
                    Active client
                  </Label>
                  <RadioGroupItem
                    id="right-active"
                    value="active"
                    className="size-5"
                  />
                </div>

                {/* Label and Caption - Top Aligned */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col pr-4">
                    <Label
                      htmlFor="right-on-hold"
                      className="paragraph-small-medium cursor-pointer"
                    >
                      On hold
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      Temporarily not receiving services
                    </span>
                  </div>
                  <RadioGroupItem
                    id="right-on-hold"
                    value="on-hold"
                    className="mt-0.5 size-5"
                  />
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex flex-col pr-4">
                    <Label
                      htmlFor="right-discharged"
                      className="paragraph-small-medium cursor-pointer"
                    >
                      Discharged
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      No longer receiving services from the
                      agency
                    </span>
                  </div>
                  <RadioGroupItem
                    id="right-discharged"
                    value="discharged"
                    className="mt-0.5 size-5"
                  />
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-4">
        <h4 className="h6-heading">Interactive Examples</h4>

        {/* Shift Type Selection */}
        <div className="space-y-4 p-4 border border-border-card rounded-lg bg-background-card">
          <div className="space-y-3">
            <h5 className="h7-heading">Shift Type</h5>
            <RadioGroup
              value={formData.shiftType}
              onValueChange={(value) =>
                handleRadioChange("shiftType", value)
              }
              className="gap-3"
            >
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
                  <RadioGroupItem
                    id="regular"
                    value="regular"
                    className="size-5"
                  />
                  <div className="flex flex-col">
                    <Label
                      htmlFor="regular"
                      className="paragraph-small-medium cursor-pointer"
                    >
                      Regular Shift
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      Standard scheduled shift for ongoing
                      client care
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
                  <RadioGroupItem
                    id="on-call"
                    value="on-call"
                    className="size-5"
                  />
                  <div className="flex flex-col">
                    <Label
                      htmlFor="on-call"
                      className="paragraph-small-medium cursor-pointer"
                    >
                      On-Call Shift
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      Emergency coverage for unexpected
                      situations
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-background-card-hover transition-colors">
                  <RadioGroupItem
                    id="respite"
                    value="respite"
                    className="size-5"
                  />
                  <div className="flex flex-col">
                    <Label
                      htmlFor="respite"
                      className="paragraph-small-medium cursor-pointer"
                    >
                      Respite Care
                    </Label>
                    <span className="caption-large text-muted-foreground">
                      Temporary relief care for primary
                      caregivers
                    </span>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}