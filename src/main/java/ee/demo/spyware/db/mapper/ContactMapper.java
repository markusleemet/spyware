package ee.demo.spyware.db.mapper;

import ee.demo.spyware.db.entity.Contact;
import ee.demo.spyware.dto.ContactDto;
import org.mapstruct.Mapper;
import org.springframework.core.convert.converter.Converter;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ContactMapper extends Converter<Contact, ContactDto> {

    Contact toEntity(ContactDto dto);

    List<ContactDto> toDto(List<Contact> contact);
}
