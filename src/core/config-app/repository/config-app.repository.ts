import { ConfigApp } from "src/entity/config.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ConfigApp)
export class ConfigAppRepository extends Repository<ConfigApp> {

}