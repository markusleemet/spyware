package ee.demo.spyware.rest;

import ee.demo.spyware.dto.ContactDto;
import ee.demo.spyware.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5173/")
@RequestMapping("/contact")
@RequiredArgsConstructor
public class ContactRest {

    private final ContactService contactService;

    @PostMapping
    public void create(@RequestBody ContactDto contactDto) {
        contactService.create(contactDto);
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
