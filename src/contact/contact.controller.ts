import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  // POST route to handle form submission
  @Post('send-email')
  async sendEmail(
    @Body('name') name: string,
    @Body('email') email: string,
  ) {
    return this.contactService.sendEmail(name, email);
  }
}
