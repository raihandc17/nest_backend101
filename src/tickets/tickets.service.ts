import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';
import { Subject } from 'rxjs';
@Injectable()
export class TicketsService {
  private readonly tickets: Ticket[] = [
    {
      id: 1,
      subject: 'cannot login to account',
      description: 'user cannot access the dashboard after login',
      priyority: 'high',
      status: 'open',
      createAt: '2026-09-01T10:00:00.000Z',
    },
    {
      id: 2,
      subject: 'payment fail',
      description: 'card payment fails at the checkout step',
      priyority: 'medium',
      status: 'open',
      createAt: '2026-09-01T11:30:00.000Z',
    },
    {
      id: 3,
      subject: 'invoice download not working',
      description: 'invioce PDF download returns an empty file',
      priyority: 'low',
      status: 'closed',
      createAt: '2026-09-01T12:45:00.000Z',
    },
  ];

  findAll(
    status?: Ticket['status'],
    priyority?: Ticket['priyority'],
  ): Ticket[] {
    let tickets = this.tickets;
    if (status) {
      tickets = tickets.filter((ticket) => ticket.status === status);
    }
    if (priyority) {
      tickets = tickets.filter((ticket) => ticket.priyority === priyority);
    }
    return tickets;
  }
  findOne(id: number): Ticket {
    const ticket = this.tickets.find((ticket) => ticket.id === id);

    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found `);
    }
    return ticket;
  }
}
