import { Genders } from "../models";

export function genderDefenition(gender: number) {
    switch (gender) {
        case Genders.uni:
            return 'uni';
        case Genders.male:
            return 'male';
        case Genders.female:
            return 'female';
    }
}