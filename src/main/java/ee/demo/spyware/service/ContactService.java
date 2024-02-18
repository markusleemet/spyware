package ee.demo.spyware.service;

import ee.demo.spyware.db.mapper.ContactMapper;
import ee.demo.spyware.db.repository.ContactRepository;
import ee.demo.spyware.dto.ContactDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository repository;
    private final ContactMapper mapper;

    public void create(ContactDto contactDto) {
        repository.save(mapper.toEntity(contactDto));
    }

    public List<ContactDto> getAll() {
        return mapper.toDto(repository.findAll());
    }
}
