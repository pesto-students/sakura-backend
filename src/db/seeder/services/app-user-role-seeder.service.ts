import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppUser } from 'src/db/entity/user/user.entity';
import { AppRole, RoleNameEnum } from 'src/db/entity/user/role.entity';
import { appUserData } from '../data/app_user';
import { appRoleData } from '../data/app_role';

@Injectable()
export class AppUserSeederService {
    constructor(
        @InjectRepository(AppUser)
        private appUserRepository: Repository<AppUser>,
        @InjectRepository(AppRole)
        private appRoleRepository: Repository<AppRole>,
    ) { }

    async seedAppRole() {
        try {
            const allPromises = appRoleData.map(role => {
                const newRole = new AppRole();
                newRole.id = parseInt(role.id);
                newRole.name = RoleNameEnum[role.name];
                return this.appRoleRepository.save(newRole);
            });
            await Promise.all(allPromises);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async seedAppUser() {
        try {

            const allPromises = appUserData.map(user => {
                const newUser = new AppUser();
                newUser.id = parseInt(user.id);
                newUser.email = user.email;
                newUser.password = user.password;
                newUser.roleId = parseInt(user.roleId);
                return this.appUserRepository.save(newUser);
            });
            await Promise.all(allPromises);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}