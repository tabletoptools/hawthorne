import {EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

export abstract class AppForm {

    @Input()
    abstract model: any;

    @Output()
    abstract modelChange: EventEmitter<any>;

    @ViewChild('form')
    abstract form: NgForm;

    @Input()
    disabled: string[] = [];

    @Input()
    required: string[] = [];

    @Input()
    blacklist: string[] = [];

    isInBlacklist(field) {
        return (
            this.blacklist.includes(field)
            || this.blacklist.includes('*')
        );
    }

    isDisabled(field) {
        return (
            this.disabled.includes(field)
            || this.disabled.includes('*')
        );
    }

    isRequired(field) {
        return (
            this.required.includes(field)
            || this.required.includes('*')
        );
    }

    isValid() {
        return !this.form.invalid;
    }
}
