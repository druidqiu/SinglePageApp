using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class ContactsController : ApiBaseController
    {
        private static readonly List<Contact> Contacts = new List<Contact>
        {
            new Contact
            {
                Id = "001",
                FirstName = "San",
                LastName = "Zhang",
                PhoneNo = "010-110",
                EmailAddress = "abc@123.com"
            },
            new Contact
            {
                Id = "002",
                FirstName = "Ric",
                LastName = "Wan",
                PhoneNo = "021-202",
                EmailAddress = "qac@123.com"
            },
        };

        public IEnumerable<Contact> Get()
        {
            return Contacts;
        }

        public Contact Get(string id)
        {
            return Contacts.FirstOrDefault(c => c.Id == id);
        }

        public void Put(Contact contact)
        {
            if (string.IsNullOrEmpty(contact.Id))
            {
                contact.Id = Guid.NewGuid().ToString();
            }
            Contacts.Add(contact);
        }

        public void Post(Contact contact)
        {
            Delete(contact.Id);
            Contacts.Add(contact);
        }

        public void Delete(string id)
        {
            Contact contact = Contacts.FirstOrDefault(c => c.Id == id);
            Contacts.Remove(contact);
        }
    }
}
