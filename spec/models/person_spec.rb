require 'rails_helper'

describe Person, type: :model do

  describe 'instance methods' do
    context 'responds to its methods' do
      person = Person.new(first_name: 'joe', last_name: 'bob', email: 'joebob@email.com')
      it { expect(person).to respond_to(:set_initial_attributes) }
      it { expect(person).to respond_to(:create_slug) }
      it { expect(person).to respond_to(:set_admin_to_false) }
      it { expect(person).to respond_to(:set_team) }
      it { expect(person).to respond_to(:set_handle) }
    end
  end
end
