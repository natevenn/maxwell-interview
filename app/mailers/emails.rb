class Emails < ActionMailer::Base

  def handle_mail_for_new_user(person)
    email_user(person).deliever
    new_user_notification(person).deliever
  end

  def welcome(person)
    @person = person
    mail to: @person, from: 'foo@example.com'
  end

  def new_user_notification(user)
    @admins = get_admin_emails
    @user = user
    mail to: @admins, from: 'foo@example.com'
  end

  def admin_removing_unvalidated_users(users)
    @admins = get_admin_emails
    @users = users
    mail to: @admins, from: 'foo@example.com'
  end

  def get_admin_emails
    Person.admin.pluck(:email) rescue []
  end
end
