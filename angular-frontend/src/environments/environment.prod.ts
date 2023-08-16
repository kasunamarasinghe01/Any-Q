import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  env : {
    HOST_URL: 'http://localhost:4200/',
    API_URL: 'http://localhost:3000/api',
    API_HEADER: new HttpHeaders({
      'API-Key': 'mAJUVCeQtaQnoMsoTtZWh5bB4Fdm6KT9T',
    }),
  }
};
