import { CoreDomainModule } from '@nestjs-bff/backend/lib/domain/core/domain.core.module';
import { MongoSharedProviderTokens } from '@nestjs-bff/backend/lib/shared/database/mongo/mongo.shared.constants';
import { Module } from '@nestjs/common';
import { CatProviderTokens } from './cat.domain.constants';
import { CatDomainSchema } from './model/cat.domain.schema';
import { CatRepoCache } from './repo/cat.domain.cache-repo';
import { CatRepoRead } from './repo/cat.domain.read-repo';
import { CatRepoWrite } from './repo/cat.domain.write-repo';

const CatsModelProvider = {
  provide: CatProviderTokens.Models.Cat,
  useFactory: mongoose => mongoose.connection.model('Cat', CatDomainSchema),
  inject: [MongoSharedProviderTokens.Connections.Mongoose],
};

@Module({
  imports: [CoreDomainModule],
  providers: [CatsModelProvider, CatRepoRead, CatRepoCache, CatRepoWrite],
  exports: [CatRepoRead, CatRepoCache, CatRepoWrite],
})
export class CatsDomainModule {}
