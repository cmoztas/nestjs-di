import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from "../power/power.module";

@Module({
  imports: [PowerModule],
  exports: [DiskService],
  providers: [DiskService]
})
export class DiskModule {}
