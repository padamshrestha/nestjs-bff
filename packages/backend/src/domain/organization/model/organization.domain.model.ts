import { OrganizationEntity } from '@nestjs-bff/global/lib/entities/organization.entity';
import { Document } from 'mongoose';

export interface IOrganizationDomainModel
  extends OrganizationEntity,
    Document {}
