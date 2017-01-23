class People < ActionController::Base

  # ... Other REST actions

  def create
    @person = Person.new(params[:person])

    @person.set_initial_attributes

    if @person.save
      Emails.handle_mail_for_new_user(@person)
      redirect_to @person, :notice => "Account added!"
    else
      render :new
    end
  end

  def validateEmail
    @user = Person.find_by_slug(params[:slug])
    if @user.present?
      @user.validate_user
    end
  end
end
