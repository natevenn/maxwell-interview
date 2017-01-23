class Emails < ActionMailer::Base

  #check if instance variables are necessary
  #
  def handle_mail_for_new_user(person)
    email_user(person).deliever
    new_user_notification(person).deliever
  end

  def welcome(person)
    @person = person
    mail to: @person, from: 'foo@example.com'
  end

  def new_user_notification(user)
    admins = Person.admin.pluck(:email) rescue []
    @user = user
    mail to: admins, from: 'foo@example.com'
  end

  def admin_removing_unvalidated_users(admins, users)
    @admins = admins.collect {|a| a.email } rescue []
    @users = users
    mail to: admins, from: 'foo@example.com'
  end
end
