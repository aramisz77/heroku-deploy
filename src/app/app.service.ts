import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  version() {
    return {
      name: process.env.npm_package_name,
      apiVersion: process.env.npm_package_version
    };
  }
}
