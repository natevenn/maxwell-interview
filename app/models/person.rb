class Person < ApplicationRecord
  scope :admin, -> { Person.where(admin: true) }
  after_save :send_email_notifications

  def validate_user
    self.validated = true
    self.save
    Rails.logger.info "USER: User ##{self.id} validated email successfully."
    Emails.handle_mail_for_new_user(self)
  end

  def set_initial_attributes
    create_slug
    set_admin_to_false
    person_count = Person.count + 1
    team_name = if(person_count).odd? ? "UnicornRainbows" : "LaserScorpions"
    set_team(team_name)
    set_handle(team_name, person_count)
  end

  def create_slug
    self.slug = "ABC123#{Time.now.to_i.to_s}1239827#{rand(10000)}"
  end

  def set_admin_to_false
    self.admin = false
  end

  def set_team(name)
    self.team = name
  end

  def set_handle(name, count)
    self.handle = name + count.to_s
  end

  def send_email_notifications
    Email.handle_mail_for_new_user(self)
  end
end
