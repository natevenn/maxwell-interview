require 'rails_helper'

describe Person, type: :model do

  context 'instance methods' do
    describe 'create_slug' do
      it 'sets slug with current time and random num' do
        current_time = Time.now
        random_number = rand(10000)
        person = Person.new
        result = "ABC123#{current_time.to_i.to_s}1239827#{random_number}"

        allow_any_instance_of(Person).to receive(:rand).with(10000).and_return(random_number)
        allow(Time).to receive(:now).and_return(current_time)
        person.create_slug
        expect(person.slug).to eq result
      end
    end

    describe 'set_admin_to_false' do
      it 'sets admin to false on person' do
        person = Person.new
        person.set_admin_to_false
        expect(person.admin).to eq false
      end
    end

    describe 'set_team' do
      it 'sets team on person' do
        person = Person.new
        person.set_team("UnicornRainbows")
        expect(person.team).to eq "UnicornRainbows"
      end
    end

    describe 'set_handle' do
      it 'sets handle on person' do
        person = Person.new
        person.set_handle("UnicornRainbows", "1")
        expect(person.handle).to eq "UnicornRainbows1"
      end
    end

    describe "set_initial_attributes" do
      it "sets slug, admin to false, team, and handle on person" do
        person = Person.new
        expect(person).to receive(:create_slug)
        expect(person).to receive(:set_admin_to_false)
        expect(person).to receive(:set_team).with("UnicornRainbows")
        expect(person).to receive(:set_handle).with("UnicornRainbows", 1)
        person.set_initial_attributes
      end
    end
  end

  describe 'validate user' do
    it 'sets validated to true' do
      person = Person.new
      expect(person.validated).to eq nil
      person.validate_user
      expect(person.validated).to eq true
    end

    it 'saves user' do
      person = Person.new
      expect(Person.count).to eq 0
      person.validate_user
      expect(Person.count).to eq 1
    end

    it 'calls handle email for new user on Email' do
      person = Person.new
      expect(Emails).to receive(:handle_mail_for_new_user).with(person)
      person.validate_user
    end
  end
end
