import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'src/db/entity/place/city.entity';
import { State } from 'src/db/entity/place/state.entity';
import { Repository } from 'typeorm';
import { citiesData } from '../data/cities';
import { statesData } from '../data/states';

@Injectable()
export class CityStateSeederService {
    constructor(
        @InjectRepository(City)
        private cityRepository: Repository<City>,
        @InjectRepository(State)
        private stateRepository: Repository<State>
    ) { }

    async seedState() {
        try {
            const allPromises = statesData.map(state => {
                const newState = new State();
                newState.id = parseInt(state.id);
                newState.name = state.name;
                newState.abbreveation = state.abbreveation;
                return this.stateRepository.save(newState);
            });
            await Promise.all(allPromises);
            console.log("seeded state");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }

    async seedCity() {
        try {
            const allPromises = citiesData.map(city => {
                const newCity = new City();
                newCity.id = parseInt(city.id);
                newCity.name = city.name;
                newCity.stateId = city.stateId;
                return this.cityRepository.save(newCity);
            });
            await Promise.all(allPromises);
            console.log("seeded city");
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }
}