import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GestCmdClientsClientModule } from './client/client.module';
import { GestCmdClientsArticleModule } from './article/article.module';
// import { GestCmdClientsCommandeModule } from './commande/commande.module';
// import { GestCmdClientsDetail_commandeModule } from './detail-commande/detail-commande.module';

@NgModule({
    imports: [
        GestCmdClientsClientModule,
        GestCmdClientsArticleModule,
        // GestCmdClientsCommandeModule,
        // GestCmdClientsDetail_commandeModule,
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestCmdClientsEntityModule {}
