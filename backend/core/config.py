from typing import List, Optional
from pydantic_settings import BaseSettings
from pydantic import field_validator

class Settings(BaseSettings):
    API_PREFIX : str = "/api"
    DEBUG : bool = False 

    DATABASE_URL: Optional[str] = None
    
    DB_USER: Optional[str] = None
    DB_PASSWORD: Optional[str] = None
    DB_HOST: Optional[str] = None
    DB_PORT: Optional[str] = "5432"
    DB_NAME: Optional[str] = None

    ALLOWED_ORIGINS: str = ""

    GROQ_API_KEY: str
    GROQ_BASE_URL: str = "https://api.groq.com"

    @field_validator("ALLOWED_ORIGINS")
    def parse_allowed_origins(cls, v:str) -> List[str]:
        return v.split(",") if v else []
    
    def assemble_db_url(self):
        if self.DATABASE_URL:
            return self.DATABASE_URL
        if all([self.DB_USER, self.DB_PASSWORD, self.DB_HOST, self.DB_PORT, self.DB_NAME]):
            return f"postgresql://{self.DB_USER}:{self.DB_PASSWORD}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
        raise ValueError("Database credentials are not set properly!")
    

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True

settings = Settings()
DATABASE_URL = settings.assemble_db_url()
