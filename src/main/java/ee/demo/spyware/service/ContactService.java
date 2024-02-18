package ee.demo.spyware.service;

import ee.demo.spyware.dto.ContactDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {


    public void create(ContactDto contactDto) {
        // TODO implement
    }

    public List<ContactDto> getAll() {
        return List.of(); // TODO implement
    }

}
