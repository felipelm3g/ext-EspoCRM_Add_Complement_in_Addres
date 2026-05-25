define(['views/fields/address'], AddressFieldView => {
    return class Address2FieldView extends AddressFieldView {
        type = 'address2'
        editTemplate = 'custom:fields/address2/edit'
        editTemplate1 = 'custom:fields/address2/edit-1'
        editTemplate2 = 'custom:fields/address2/edit-2'
        editTemplate3 = 'custom:fields/address2/edit-3'
        editTemplate4 = 'custom:fields/address2/edit-4'

        data() {
            const data = super.data();

            if (this.isEditMode()) {
                data.complementMaxLength = this.complementMaxLength;
            }

            return data;
        }

        afterRender() {
            super.afterRender();

            if (this.mode === this.MODE_EDIT) {
                this.$complement = this.$el.find(`[data-name="${this.complementField}"]`);
                this.$complement.on('change', () => this.trigger('change'));
            }
        }

        validateRequired() {
            const validate = name => {
                if (this.model.isRequired(name)) {
                    if (this.model.get(name) === '') {
                        const msg = this.translate('fieldIsRequired', 'messages')
                            .replace('{field}', this.translate(name, 'fields', this.entityType));

                        this.showValidationMessage(msg, '[data-name="' + name + '"]');

                        return true;
                    }
                }
            };

            return this.addressAttributeList.reduce((result, attribute) => validate(attribute) || result, false);
        }

        isRequired() {
            return this.addressAttributeList.some(attribute => this.model.getFieldParam(attribute, 'required'));
        }

        getStreetValueForFormatting() {
            const streetValue = this.model.get(this.streetField);
            const complementValue = this.model.get(this.complementField);

            if ((streetValue === null || streetValue === '') && (complementValue !== null && complementValue !== '')) {
                return complementValue;
            }

            if (streetValue !== null && streetValue !== '' && complementValue !== null && complementValue !== '') {
                return streetValue + '\n' + complementValue;
            }

            return streetValue;
        }

        getFormattedAddress1() {
            const postalCodeValue = this.model.get(this.postalCodeField);
            const streetValue = this.getStreetValueForFormatting();
            const cityValue = this.model.get(this.cityField);
            const stateValue = this.model.get(this.stateField);
            const countryValue = this.model.get(this.countryField);

            let html = '';

            if (streetValue) {
                html += streetValue;
            }

            if (cityValue || stateValue || postalCodeValue) {
                if (html !== '') {
                    html += '\n';
                }
                if (cityValue) {
                    html += cityValue;
                }
                if (stateValue) {
                    if (cityValue) {
                        html += ', ';
                    }
                    html += stateValue;
                }
                if (postalCodeValue) {
                    if (cityValue || stateValue) {
                        html += ' ';
                    }
                    html += postalCodeValue;
                }
            }

            if (countryValue) {
                if (html !== '') {
                    html += '\n';
                }
                html += countryValue;
            }

            return html;
        }

        getFormattedAddress2() {
            const postalCodeValue = this.model.get(this.postalCodeField);
            const streetValue = this.getStreetValueForFormatting();
            const cityValue = this.model.get(this.cityField);
            const stateValue = this.model.get(this.stateField);
            const countryValue = this.model.get(this.countryField);

            let html = '';

            if (streetValue) {
                html += streetValue;
            }

            if (cityValue || postalCodeValue) {
                if (html !== '') {
                    html += '\n';
                }
                if (postalCodeValue) {
                    html += postalCodeValue;
                    if (cityValue) {
                        html += ' ';
                    }
                }
                if (cityValue) {
                    html += cityValue;
                }
            }

            if (stateValue || countryValue) {
                if (html !== '') {
                    html += '\n';
                }
                if (stateValue) {
                    html += stateValue;
                    if (countryValue) {
                        html += ' ';
                    }
                }
                if (countryValue) {
                    html += countryValue;
                }
            }

            return html;
        }

        getFormattedAddress3() {
            const postalCodeValue = this.model.get(this.postalCodeField);
            const streetValue = this.getStreetValueForFormatting();
            const cityValue = this.model.get(this.cityField);
            const stateValue = this.model.get(this.stateField);
            const countryValue = this.model.get(this.countryField);

            let html = '';

            if (countryValue) {
                html += countryValue;
            }

            if (cityValue || stateValue || postalCodeValue) {
                if (html !== '') {
                    html += '\n';
                }
                if (postalCodeValue) {
                    html += postalCodeValue;
                }
                if (stateValue) {
                    if (postalCodeValue) {
                        html += ' ';
                    }
                    html += stateValue;
                }
                if (cityValue) {
                    if (postalCodeValue || stateValue) {
                        html += ' ';
                    }
                    html += cityValue;
                }
            }

            if (streetValue) {
                if (html !== '') {
                    html += '\n';
                }
                html += streetValue;
            }

            return html;
        }

        getFormattedAddress4() {
            const postalCodeValue = this.model.get(this.postalCodeField);
            const streetValue = this.getStreetValueForFormatting();
            const cityValue = this.model.get(this.cityField);
            const stateValue = this.model.get(this.stateField);
            const countryValue = this.model.get(this.countryField);

            let html = '';

            if (streetValue) {
                html += streetValue;
            }

            if (cityValue) {
                if (html !== '') {
                    html += '\n';
                }
                html += cityValue;
            }

            if (countryValue || stateValue || postalCodeValue) {
                if (html !== '') {
                    html += '\n';
                }
                if (countryValue) {
                    html += countryValue;
                }
                if (stateValue) {
                    if (countryValue) {
                        html += ' - ';
                    }
                    html += stateValue;
                }
                if (postalCodeValue) {
                    if (countryValue || stateValue) {
                        html += ' ';
                    }
                    html += postalCodeValue;
                }
            }

            return html;
        }
    };
});
