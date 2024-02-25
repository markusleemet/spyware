package ee.demo.spyware.rest;

import ee.demo.spyware.db.entity.Contact;
import ee.demo.spyware.dto.ContactDto;
import ee.demo.spyware.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://127.0.0.1:5173", "https://spyware.leemetmarkus.ee"})
@RequestMapping("/contact")
@RequiredArgsConstructor
public class ContactRest {

    private final ContactService contactService;

    @PostMapping
    public Contact create(@RequestBody ContactDto contactDto) {
        return contactService.create(contactDto);
    }

    @GetMapping
    public List<ContactDto> getAll() {
        return contactService.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id) {
        contactService.delete(id);
    }
}
